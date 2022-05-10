require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const unregisterUser = require('./unregisterUser')
const { errors: { NotFoundError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('unregisterUser', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                return User.create({ name: 'Ti Greton', email: 'ti@greton.com', password: hash })
            })
            .then(user => unregisterUser(user.id, '123123123'))
    })

    it('should fail when user does not exist', () => {
        const unknownUserId = new ObjectId().toString()

        return User.deleteMany()
            .then(() => unregisterUser(unknownUserId, '123123123'))
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