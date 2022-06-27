require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const updateUser = require('./updateUser')
const { errors: { NotFoundError, DuplicityError } } = require('commons')


const { env: { MONGODB_URL } } = process

describe('updateUser', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                return User.create({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
            })
            .then(user => updateUser(user.id, 'GaTon', 'ga@ton.com', '121212'))
            .then(() => {
                User.find({ email: 'ga@ton.com' })
                    .then(user => {
                        expect(user).to.exist
                        expect(user.username).to.equal('GaTon')
                        expect(user.email).to.equal('ga@ton.com')
                        expect(user.password).to.equal('121212')
                    })
            })
    })

    it('should fail when user already exists and wants to change username to an existing one.', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                return (user1.save(), user2.save())
            })
            .then(user1 => updateUser(user1.id, 'GaTon', 'ti@greton.com', '121212'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('user with same credentials already exists')
            })
    })

    
    it('should fail when user already exists and wants to change email to an existing one. ', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                return (user1.save(), user2.save())
            })
            .then(user2 => updateUser(user2.id, 'GaTon', 'ti@greton.com', '121212'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('user with same credentials already exists')
            })
    })

    it('should fail when user does not exist', () => {
        const unknownUserId = new ObjectId().toString()

        return User.deleteMany()
            .then(() => updateUser(unknownUserId, 'GaTon', 'ga@ton.com','121212'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknownUserId} not found`)
            })
    })

    after(() => disconnect())
})