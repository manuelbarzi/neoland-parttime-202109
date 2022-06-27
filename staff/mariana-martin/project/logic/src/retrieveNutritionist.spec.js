require('dotenv').config()
const{ mongoose: { connect, disconnect, Types: { ObjectId }}, models: { User }} = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveNutritionist = require('./retrieveNutritionist')
const { errors: { NotFoundError }} = require('commons')

const { env: { MONGODB_URL}} = process

describe('retrieveNutritionist', () => {
    before(() => connect(MONGODB_URL))

    //positive case 1: 

    it('should succeed when user already exists', () => {
        debugger
        return User.deleteMany()
        .then(() => {
            const hash = bcrypt.hashSync('123456789', 10)
                //creo un user para luego recuperarlo
            return User.create({ role:0, username: 'campanita', email: 'campa@mail.com', password:hash})
        })
        .then(user => retrieveNutritionist(user.id))
        .then(user => {
            expect(user).to.exist
            expect(user.username).to.equal('campanita')
            expect(user.email).to.equal('campa@mail.com')
            expect(user.password).to.be.undefined  //porque no queremos que nos devuelva el password, sólo los públicos
        })
    })

//case 2: no ubica al user,(no existe) recuperar un usuario que no existe, generando un id nosotros mismos (no existe en databas)

    it('should fail when user does not exists', ()=> {
        const unknownUserId = new ObjectId().toString() //creo un id valido, pero no está en base  y lo covnierto en string

        return User.deleteMany()
            .then(() => retrieveNutritionist(unknownUserId))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)  //paso el id del ibjectid que cree 
                expect(error.message).to.equal(`user with id ${unknownUserId} not found`)
            })
    })
    after(() => disconnect)
})
