require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const deleteUser = require('./deleteUser')
const { errors: { NotFoundError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('deleteUser', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                return User.create({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
            })
            .then(user => deleteUser(user.id, '121212'))
    })

    it('should fail when user does not exist', () => {
        const unknownUserId = new ObjectId().toString()

        return User.deleteMany()
            .then(() => deleteUser(unknownUserId, '121212'))
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