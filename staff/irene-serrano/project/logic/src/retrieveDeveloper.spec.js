require('dotenv').config()
const { mongoose: {connect, disconnect, Types: { ObjectId } }, models: { User }} = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveDeveloper = require('./retrieveDeveloper')
const { errors: { NotFoundError, AuthError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe( 'retrieveDeveloper', () => {
    before(() => connect(MONGODB_URL))
    
    it('should succeed when developer already exists', () => {
        return User.deleteMany()
            .then( ()=> {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({role: 1, name: 'Segundo Luis', email: 'do@do.do', password: hash, description: 'segundo developer', stack: 'full-stack' })

            })
            .then(developer => retrieveDeveloper(developer.id))
            .then(developer => {
                expect(developer).to.exist
                expect(developer.name).to.equal('Segundo Luis')
                expect(developer.email).to.equal('do@do.do')
                expect(developer.password).to.not.be.undefined
                expect(developer.description).to.equal('segundo developer')
                expect(developer.stack).to.equal('full-stack')
                expect(developer.location).to.be.a('undefined')
                expect(developer.link).to.be.a('undefined')

            })
    })

    it('should fail when developer does not exist', () => {
        const unknownUserId = new ObjectId().toString()

        return User.deleteMany()
        .then(() => retrieveDeveloper(unknownUserId))
        .then(() => {
            throw new Error('should not reach this point')
        })
        .catch(error => {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal('developer not found')
        })
    })

    it('should fail if role is not a developer role (1)', ()=>{
        return User.deleteMany()
        .then( ()=> {
            const hash = bcrypt.hashSync('123456789', 10)

            return User.create({role: 2, name: 'Segundo Luis', email: 'do@do.do', password: hash, description: 'segundo developer', stack: 'full-stack' })

        })
        .then(developer => retrieveDeveloper(developer.id))
        .then(developer => {
            expect(developer).to.not.exist
        })
        .catch(error => {
            expect(error).to.be.instanceOf(AuthError)
        })
    })
 

    after(() => disconnect())
})