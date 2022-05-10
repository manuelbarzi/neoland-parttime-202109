require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveUser = require('./retrieveUser')
const { errors: { NotFoundError }} = require('commons')

const { env: { MONGODB_URL } } = process

describe('authenticateUser', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                return User.create({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
            })
            .then(user => retrieveUser(user.id))
            .then(user => {
                expect(user).to.exist
                expect(user.username).to.equal('TiGreton')
                expect(user.email).to.equal('ti@greton.com')
                expect(user.password).to.be.undefined
            })
    })

    it('should fail when user does not exist', () => {
        const unknownId = new ObjectId().toString()

        return User.deleteMany()
            .then(() => retrieveUser(unknownId))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknownId} not found`)
            })
    })

    after(() => disconnect())
})