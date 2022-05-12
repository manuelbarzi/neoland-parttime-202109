require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Note } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveNotes = require('./retrieveNotes')
const { errors: { NotFoundError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('retrieveNotes', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return Promise.all([User.deleteMany(), Note.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                const user1 = new User({ name: 'Ti Greton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ name: 'Ga Ton', email: 'ga@ton.com', password: hash })

                const note1 = new Note({ user: user1.id, text: 'note 1', public: true, color: 'yellow' })
                const note2 = new Note({ user: user2.id, text: 'note 2', public: false, color: 'yellow' })
                const note3 = new Note({ user: user2.id, text: 'note 3', public: true, color: 'yellow' })
                const note4 = new Note({ user: user1.id, text: 'note 4', public: false, color: 'yellow' })
                const note5 = new Note({ user: user1.id, text: 'note 5', public: false, color: 'yellow' })

                return Promise.all([
                    user1.save(),
                    user2.save(),
                    note1.save(),
                    note2.save(),
                    note3.save(),
                    note4.save(),
                    note5.save()
                ])
            })
            .then(([user1, user2, note1, note2, note3, note4, note5]) => {
                return retrieveNotes(user1.id)
                    .then(notes => {
                        expect(notes).to.exist
                        expect(notes).to.be.instanceOf(Array)
                        expect(notes).to.have.lengthOf(3)

                        notes.forEach(note => {
                            expect(note.text === 'note 1' || note.text === 'note 4' || note.text === 'note 5').to.be.true

                            if (note.text === 'note 1')
                                expect(note.public).to.be.true
                            else
                                expect(note.public).to.be.false
                        })
                    })
            })

    })

    it('should fail when user does not exist', () => {
        const unknwonUserId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Note.deleteMany()])
            .then(user => retrieveNotes(unknwonUserId))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknwonUserId} not found`)
            })
    })

    after(() => disconnect())
})