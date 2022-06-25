require('dotenv').config()
const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')

const { errors: { DuplicityError, NotFoundError }} = require('commons')
const updateDeveloper = require('./updateDeveloper')

const { env: { MONGODB_URL } } = process

describe('updateDeveloper', ()=>{
    before(()=> connect(MONGODB_URL))


    it('should succeed when all properties are passed and data types are the spected', ()=>{
        return User.deleteMany()
        .then(()=> User.create({role: 1, name: 'Segundo Luis', email: 'do@do.do', password: '123456789', description: 'segundo developer', stack: 'full-stack' }))
        .then(developer=> updateDeveloper(developer.id, 'Ya no soy segundo Luis', 'do@do.do','123456789', 'primero actualizo developer', 'full-stack', 'Granada', null) )
        
        .then(()=>{
            User.find({email:'do@do.do'})
            .then(updatedDeveloper=>{
            
                expect(updatedDeveloper).to.exist
                expect(updatedDeveloper.role).to.equal(1)
                expect(updatedDeveloper.name).to.equal('Ya no soy segundo Luis')
                expect(updatedDeveloper.email).to.equal('do@do.do')
                expect(updatedDeveloper.description).to.equal('primero actualizo developer')
                expect(updatedDeveloper.password).to.equal('123456789')
                expect(updatedDeveloper.stack).to.equal('full-stack')
                expect(updatedDeveloper.location).to.equal('Granada')
                expect(updatedDeveloper.link).to.equal(null)
    
            })
        })
      
    })

    it('should fail when a few properties are passed and data types are the spected', ()=>{
        return User.deleteMany()
        .then(()=> User.create({role: 1, name: 'Segundo Luis', email: 'do@do.do', password: '123456789', description: 'segundo developer', stack: 'full-stack' }))
        .then(developer=> updateDeveloper(developer.id, 'Ya no soy segundo Luis', '123456789', 'primero actualizo developer', null, null) )
        .catch(error => {
            expect(error).to.exist
        })
  
    })

    it('should fail when data type is not the spected', ()=>{
        return User.deleteMany()
        .then(()=> User.create({role: 1, name: 'Segundo Luis', email: 'do@do.do', password: '123456789', description: 'segundo developer', stack: 'full-stack' }))
        .then(developer=> updateDeveloper(developer.id, 3, null ,'123456789', 'primero actualizo developer', null, null, null) )
        .catch(error => {
            expect(error).to.exist
          
        })
    })

    after(()=> disconnect())
})