require('dotenv').config()
const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const registerUser = require('./registerUser')
const { errors: { DuplicityError }} = require('commons')

const { env: { MONGODB_URL } } = process

describe('registerUser', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user does not exist', () => {
        return User.deleteMany()
            .then(() => registerUser('Cama Leon', 'cama@leon.com', '123123123'))
            .then(() => User.findOne({ email: 'cama@leon.com' }))
            .then(user => {
                expect(user).to.exist
                expect(user.name).to.equal('Cama Leon')
                expect(user.email).to.equal('cama@leon.com')
                //expect(user.password).to.equal('123123123') NO!

                expect(bcrypt.compareSync('123123123', user.password)).to.be.true
            })
    })

    it('should fail when user already exists', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123123123', 10)

                return User.create({ name: 'Ti Greton', email: 'ti@greton.com', password: hash })
            })
            .then(() => registerUser('Ti Greton', 'ti@greton.com', '123123123'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('user already exists')
            })
    })

    after(() => disconnect())
})