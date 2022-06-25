require('dotenv').config()
const { mongoose: {connect, disconnect, Types: { ObjectId } }, models: { User }} = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveCompany = require('./retrieveCompany')
const { errors: { NotFoundError, AuthError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe( 'retrieveCompany', () => {
    before(() => connect(MONGODB_URL))
    
    it('should succeed when company already exists', () => {
        return User.deleteMany()
            .then( ()=> {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({role: 2, name: 'Segundo Luis', email: 'do@comp.do', password: hash, description: 'segundo company', stack: 'full-stack' })

            })
            .then(company => retrieveCompany(company.id))
            .then(company => {
                expect(company).to.exist
                expect(company.name).to.equal('Segundo Luis')
                expect(company.email).to.equal('do@comp.do')
                expect(company.password).to.not.be.undefined
                expect(company.description).to.equal('segundo company')
                expect(company.stack).to.equal('full-stack')
                expect(company.location).to.be.a('undefined')
                expect(company.link).to.be.a('undefined')

            })
    })

    it('should fail when company does not exist', () => {
        const unknownUserId = new ObjectId().toString()

        return User.deleteMany()
        .then(() => retrieveCompany(unknownUserId))
        .then(() => {
            throw new Error('should not reach this point')
        })
        .catch(error => {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`company not found`)
        })
    })

    it('should fail if role is not a company role (2)', ()=>{
        return User.deleteMany()
        .then( ()=> {
            const hash = bcrypt.hashSync('123456789', 10)

            return User.create({role: 1, name: 'Segundo Luis', email: 'do@do.do', password: hash, description: 'segundo company', stack: 'full-stack' })

        })
        .then(company => retrieveCompany(company.id))
        .then(company => {
            expect(company).to.not.exist
        })
        .catch(error => {
            expect(error).to.be.instanceOf(AuthError)
        })
    })
 

    after(() => disconnect())
})