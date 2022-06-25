require('dotenv').config()
const { mongoose: { connect, disconnect }, models: {User} } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')

const { errors: { DuplicityError }} = require('commons')
const registerDeveloper = require('./registerDeveloper')

const { env: { MONGODB_URL } } = process

describe('registerDeveloper', ()=>{
    before(()=> connect(MONGODB_URL))
    //envolvemos cada caso del test en un 'it'
    it('should succeed when developer does not exist', ()=> {
        return User.deleteMany()
            .then(()=> registerDeveloper(1, 'Juanito', 'juan@juan.juan', '123456789', 'tambien soy majisimo', 'front-end', null, null))
            .then(()=> User.findOne({ email: 'juan@juan.juan'}))
            .then(developer => {
                
                expect(developer).to.exist
                expect(developer.role).to.equal(1)
                expect(developer.name).to.equal('Juanito')
                expect(developer.email).to.equal('juan@juan.juan')

                expect(bcrypt.compareSync('123456789', developer.password)).to.be.true
                expect(developer.description).to.equal('tambien soy majisimo')
                expect(developer.stack).to.equal('front-end')
                expect(developer.location).to.equal(null)
            })
    })

    it('should fail when developer already exist', () => {
        return User.deleteMany()
            .then(()=> {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({role: 1, name: 'Segundo Luis', email: 'do@do.do', password: hash, description: 'segundo developer', stack: 'full-stack' })
            })
            .then(()=> registerDeveloper(1,'Segundo Luis','do@do.do','123456789', 'segundo developer', 'full-stack' ))
            .then(()=> {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('developer already exists')
            })
    })


    after(()=> disconnect())
})