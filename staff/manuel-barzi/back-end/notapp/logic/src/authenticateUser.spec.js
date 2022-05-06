require('dotenv').config()
const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const authenticateUser = require('./authenticateUser')
const { errors: { AuthError }} = require('commons')

const { env: { MONGODB_URL } } = process

describe('authenticateUser', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists and credentials are correct', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                return User.create({ name: 'Ti Greton', email: 'ti@greton.com', password: hash })
            })
            .then(() => authenticateUser('ti@greton.com', '123123123'))
            .then(userId => {
                expect(userId).to.exist
                expect(userId).to.be.a('string')

                return User.findOne({ email: 'ti@greton.com' })
                    .then(user => {
                        expect(user.id).to.equal(userId)
                    })
            })
    })

    it('should fail when user does not exist', () => {
        return User.deleteMany()
            .then(() => authenticateUser('ti@greton.com', '123123123'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(AuthError)
                expect(error.message).to.equal('wrong credentials')
            })
    })

    it('should fail when user already exists and email is wrong', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                return User.create({ name: 'Ti Greton', email: 'ti@greton.com', password: hash })
            })
            .then(() => authenticateUser('wrong-' + 'ti@greton.com', '123123123'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(AuthError)
                expect(error.message).to.equal('wrong credentials')
            })
    })

    it('should fail when user already exists and password is wrong', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                return User.create({ name: 'Ti Greton', email: 'ti@greton.com', password: hash })
            })
            .then(() => authenticateUser('ti@greton.com', '123123123' + '-wrong'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(AuthError)
                expect(error.message).to.equal('wrong credentials')
            })
    })

    after(() => disconnect())
})