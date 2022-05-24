require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId}}, models: { User}} = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const deleteNutritionist = require('./deleteNutritionist')
const {errors: { NotFoundError }} = require('commons')

const { env: { MONGODB_URL}} = process

describe('deleteNutritionist',() => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return User.deleteMany()
        .then(() => {
            const hash = bcrypt.hashSync('123456789', 10)

            return User.create({ role:0, username: 'campanita', email: 'campa@mail.com', password: hash})
        })
        .then(user => deleteNutritionist(user.id, '123456789'))
    })

//case 2: 
    it('should fail when user does not exists', () => {
        const unknownUserId = new ObjectId().toString()

        return User.deleteMany()
            .then(() => deleteNutritionist(unknownUserId, '123456789'))
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