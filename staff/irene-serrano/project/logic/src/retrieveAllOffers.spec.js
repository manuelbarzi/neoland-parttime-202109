require('dotenv').config()
const { mongoose: { connect, disconnect }, models: { User, Offer } } = require('data')
const { expect } = require('chai')


const { errors: { NotFoundError }} = require('commons')
const retrieveAllOffers = require('./retrieveAllOffers')

const { env: { MONGODB_URL } } = process


describe('retrieveAllOffers', ()=>{
    before(()=> connect(MONGODB_URL))

    it('should succeed when more than one offer is returned (all offers)', ()=> {
        return User.deleteMany()
       
        .then(() => {
            Promise.all([
                Offer.create({user: '1234-1234', title: 'Titulo oferta 1', description: 'Descripción oferta 1', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                Offer.create({user: '1234-abcd', title: 'Titulo oferta 2', description: 'Descripción oferta 2', stack: 'back-end', minSalary: 2000, maxSalary: 3000, location:'Valladolid'}),
                Offer.create({user: '2345-abcd', title: 'Titulo oferta 3', description: 'Descripción oferta 3', stack: 'full-stack', minSalary: 2200, maxSalary: 3200, location:'Salamanca'}),
                Offer.create({user: 'abcd-2345', title: 'Titulo oferta 4', description: 'Descripción oferta 4', stack: 'back-end', minSalary: 1200, maxSalary: 1300, location:'Avila'}),
                Offer.create({user: 'abcd-1234', title: 'Titulo oferta 5', description: 'Descripción oferta 5', stack: 'front-end', minSalary: 2800, maxSalary: 3800, location:'Soria'}),
            ])
            .then(()=> retrieveAllOffers())
            .then(offers=> {
           
            expect(offers.length).to.equal(5)
            expect(offers[0].title).to.equal('Titulo oferta 1')
            expect(offers[1].title).to.equal('Titulo oferta 2')
            expect(offers[2].title).to.equal('Titulo oferta 3')
            expect(offers[3].title).to.equal('Titulo oferta 4')
            expect(offers[4].title).to.equal('Titulo oferta 5')
            })
        })
         
    })

  
    it('should succeed when only active  Offers from one user (userId 1234-1234) are returned', ()=> {
            return User.deleteMany()
           
            .then(() => {
                Promise.all([
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 1', description: 'Descripción oferta 1', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                    Offer.create({user: '1234-abcd', title: 'Titulo oferta 2', description: 'Descripción oferta 2', stack: 'back-end', minSalary: 2000, maxSalary: 3000, location:'Valladolid'}),
                    Offer.create({user: '2345-abcd', title: 'Titulo oferta 3', description: 'Descripción oferta 3', stack: 'full-stack', minSalary: 2200, maxSalary: 3200, location:'Salamanca'}),
                    Offer.create({user: 'abcd-2345', title: 'Titulo oferta 4', description: 'Descripción oferta 4', stack: 'back-end', minSalary: 1200, maxSalary: 1300, location:'Avila'}),
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 6', description: 'Descripción oferta 6', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 7', description: 'Descripción oferta 7', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                    Offer.create({user: 'abcd-1234', title: 'Titulo oferta 5', description: 'Descripción oferta 5', stack: 'front-end', minSalary: 2800, maxSalary: 3800, location:'Soria'}),
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 8', description: 'Descripción oferta 8', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia', active: false}),
                ])
                .then(()=> retrieveAllOffers({user:'1234-1234'}))
                .then(offers=> {
               
                expect(offers.length).to.equal(3)
                expect(offers[0].title).to.equal('Titulo oferta 1')
                expect(offers[1].title).to.equal('Titulo oferta 6')
                expect(offers[2].title).to.equal('Titulo oferta 7')
                expect(offers[0].user).to.equal('1234-1234')
                expect(offers[1].user).to.equal('1234-1234')
                expect(offers[2].user).to.equal('1234-1234')
                expect(offers[0].stack).to.equal('front-end')
                expect(offers[1].stack).to.equal('front-end')
                expect(offers[2].stack).to.equal('front-end')
                expect(offers[0].minSalary).to.equal(200)
                expect(offers[1].minSalary).to.equal(200)
                expect(offers[2].minSalary).to.equal(200)
                expect(offers[0].maxSalary).to.equal(300)
                expect(offers[1].maxSalary).to.equal(300)
                expect(offers[2].maxSalary).to.equal(300)
                expect(offers[3]).to.equal(undefined)
                })
            })
             
        })

        it('should fail when any active offer match the condition', ()=> {
            return User.deleteMany()
           
            .then(() => {
                Promise.all([
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 1', description: 'Descripción oferta 1', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                    Offer.create({user: '1234-abcd', title: 'Titulo oferta 2', description: 'Descripción oferta 2', stack: 'full-stack', minSalary: 2000, maxSalary: 3000, location:'Valladolid'}),
                    Offer.create({user: '2345-abcd', title: 'Titulo oferta 3', description: 'Descripción oferta 3', stack: 'full-stack', minSalary: 2200, maxSalary: 3200, location:'Salamanca'}),
                    Offer.create({user: 'abcd-2345', title: 'Titulo oferta 4', description: 'Descripción oferta 4', stack: 'full-stack', minSalary: 1200, maxSalary: 1300, location:'Avila'}),
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 6', description: 'Descripción oferta 6', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 7', description: 'Descripción oferta 7', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                    Offer.create({user: 'abcd-1234', title: 'Titulo oferta 5', description: 'Descripción oferta 5', stack: 'front-end', minSalary: 2800, maxSalary: 3800, 
                    location:'Soria'}),
                    Offer.create({user: '1234-1234', title: 'Titulo oferta 8', description: 'Descripción oferta 8', stack: 'back-end', minSalary: 200, maxSalary: 300, location:'Segovia', active: false}),
                ])
                .then(()=> retrieveAllOffers({stack:'back-end'}))
                .catch(error => {
                    expect(error).to.exist
                    expect(error).to.be.instanceOf(NotFoundError)
                })
                    

            })
             
        })

    after(()=> disconnect())
})