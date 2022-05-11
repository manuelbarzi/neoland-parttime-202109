require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Note } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const createNote = require('./createNote')
const { errors: { NotFoundError }} = require('commons')

const { env: { MONGODB_URL } } = process

describe('createNote', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return Promise.all([User.deleteMany(), Note.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                return User.create({ name: 'Ti Greton', email: 'ti@greton.com', password: hash })
            })
            .then(user => {
                return createNote(user.id, 'hola mundo', 'red', true)
                    .then(res => {
                        expect(res).to.be.undefined

                        return Note.findOne({ user: user.id })
                    })
                    .then(note => {
                        expect(note).to.exist
                        expect(note.user.toString()).to.equal(user.id)
                        expect(note.text).to.equal('hola mundo')
                        expect(note.color).to.equal('red')
                        expect(note.public).to.be.true
                    })
            })
            
    })

    it('should fail when user does not exist', () => {
        const unknwonUserId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Note.deleteMany()])
            .then(user => createNote(unknwonUserId, 'hello world', 'blue', false))
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