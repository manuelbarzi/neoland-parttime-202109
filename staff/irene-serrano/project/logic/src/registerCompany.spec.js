require('dotenv').config()
const { mongoose: { connect, disconnect }, models: {User} } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')

const { errors: { DuplicityError }} = require('commons')
const registerCompany = require('./registerCompany')

const { env: { MONGODB_URL } } = process

describe('registerCompany', ()=>{
    before(()=> connect(MONGODB_URL))
 
    it('should succeed when company does not exist', ()=> {
        return User.deleteMany()
            .then(()=> registerCompany(2, 'Juanito', 'juan@comp.juan', '123456789', 'tambien soy majisimo', 'front-end', null, null))
            .then(()=> User.findOne({ email: 'juan@comp.juan'}))
            .then(company => {
                
                expect(company).to.exist
                expect(company.role).to.equal(2)
                expect(company.name).to.equal('Juanito')
                expect(company.email).to.equal('juan@comp.juan')

                expect(bcrypt.compareSync('123456789', company.password)).to.be.true
                expect(company.description).to.equal('tambien soy majisimo')
                expect(company.stack).to.equal('front-end')
                expect(company.location).to.equal(null)
            })
    })

    it('should fail when company already exist', () => {
        return User.deleteMany()
            .then(()=> {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({role: 2, name: 'Segundo Luis', email: 'do@comp.do', password: hash, description: 'segundo company', stack: 'full-stack' })
            })
            .then(()=> registerCompany(2,'Segundo Luis','do@comp.do','123456789', 'segundo company', 'full-stack' ))
            .then(()=> {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('company already exists')
            })
    })


    after(()=> disconnect())
})