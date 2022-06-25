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

                return User.create({role: 2, name: 'Segundo Luis', email: 'do@comp.do', password: hash, description: 'segundo company', stack: 'full-stack' })
            })
            .then(() => authenticateUser('do@comp.do', '123123123'))
            .then(userId => {
                expect(userId).to.exist
                expect(userId).to.be.a('string')

                return User.findOne({ email: 'do@comp.do' })
                    .then(user => {
                        expect(user.id).to.equal(userId)
                    })
            })
    })

    it('should fail when user does not exist', () => {
        return User.deleteMany()
        .then(() => {
            const hash = bcrypt.hashSync('123123123', 10)

            return User.create({role: 2, name: 'Segundo Luis', email: 'do@comp.do', password: hash, description: 'segundo company', stack: 'full-stack' })
        })
            .then(() => authenticateUser('wrong+' +  'do@comp.do', '123123123'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('email does not exists')
            })
    })

    it('should fail when user exists but password is wrong', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                return User.create({role: 2, name: 'Segundo Luis', email: 'do@comp.do', password: hash, description: 'segundo company', stack: 'full-stack' })
            })
            .then(() => authenticateUser('do@comp.do', 'wrong+' +'321321321'))
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