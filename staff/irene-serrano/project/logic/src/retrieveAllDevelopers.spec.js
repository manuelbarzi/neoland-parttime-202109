require('dotenv').config()
const { mongoose: {connect, disconnect, Types: { ObjectId } }, models: { User }} = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveAllDevelopers = require('./retrieveDeveloper')
const { errors: { NotFoundError, AuthError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe( 'retrieveAllDevelopers', () => {
    before(() => connect(MONGODB_URL))
    
    it('should succeed when only developers are returned', ()=> {
        return User.deleteMany()
        .then(()=>{
            const hash = bcrypt.hashSync('123456789', 10)

            Promise.all([
                User.create({role: 1, name: 'Developer 1', email: 'dev1@dev.dev', password: hash, description: 'Developer 1', stack: 'full-stack' }),
                User.create({role: 1, name: 'Developer 2', email: 'dev2@dev.dev', password: hash, description: 'Developer 2', stack: 'full-stack' }),
                User.create({role: 1, name: 'Developer 3', email: 'dev3@dev.dev', password: hash, description: 'Developer 3', stack: 'full-stack' }),
                User.create({role: 1, name: 'Developer 4', email: 'dev4@dev.dev', password: hash, description: 'Developer 4', stack: 'full-stack' }),
                User.create({role: 1, name: 'Developer 5', email: 'dev5@dev.dev', password: hash, description: 'Developer 5', stack: 'full-stack' }),

                User.create({role: 2, name: 'Company 1', email: 'comp1@comp.comp', password: hash, description: 'Company 1' }),
                User.create({role: 2, name: 'Company 2', email: 'comp2@comp.comp', password: hash, description: 'Company 2' }),
                User.create({role: 2, name: 'Company 3', email: 'comp3@comp.comp', password: hash, description: 'Company 3' }),
                User.create({role: 2, name: 'Company 4', email: 'comp4@comp.comp', password: hash, description: 'Company 4' }),
                User.create({role: 2, name: 'Company 5', email: 'comp5@comp.comp', password: hash, description: 'Company 5' }),
               

            ])
            .then(()=>{ retrieveAllDevelopers() })
            .then((developers)=>{
                expect(developers.length).to.equal(5)
                expect(developers[0].role).to.equal(1)
                expect(developers[1].name).to.equal('Developer 2')
                expect(developers[2].description).to.equal('Developer 3')
                expect(developers[3].stack).to.equal('full-stack')
                expect(developers[4].link).to.equal(null)
                expect(developers[5]).to.not.exist
            }

            )
        })
        
    })

    it('should fail if there is no developer to return', () => {
        return User.deleteMany()
        .then(()=>{
            const hash = bcrypt.hashSync('123456789', 10)

            Promise.all([
            
                User.create({role: 2, name: 'Company 1', email: 'comp1@comp.comp', password: hash, description: 'Company 1' }),
                User.create({role: 2, name: 'Company 2', email: 'comp2@comp.comp', password: hash, description: 'Company 2' }),
                User.create({role: 2, name: 'Company 3', email: 'comp3@comp.comp', password: hash, description: 'Company 3' }),
                User.create({role: 2, name: 'Company 4', email: 'comp4@comp.comp', password: hash, description: 'Company 4' }),
                User.create({role: 2, name: 'Company 5', email: 'comp5@comp.comp', password: hash, description: 'Company 5' }),
               

            ])
            .then(()=>{retrieveAllDevelopers()})
            
            .catch(error=> {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('cant find any developer')
            })
        })
 
    })

    after(() => disconnect())
})