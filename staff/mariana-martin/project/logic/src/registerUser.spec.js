require('dotenv').config()
const { mongoose: { connect, disconnect }, models: { User }} = require('data')
const { expect } = require('chai') //expect ayuda a comprobar 
const bcrypt = require('bcryptjs')
const registerUser = require('./registerUser')
const { errors: { DuplicityError}} = require('commons')

const {env: {MONGODB_URL}} = process

describe('registerUser', () => {
    before(() => connect(MONGODB_URL))
    
    it('should succeed when user does not exist', () => {
       debugger
        return User.deleteMany()
        .then(() => registerUser( 0, 'wendylee', 'wendy@mail.com', '123456789' ))
        .then(() => User.findOne({ email: 'wendy@mail.com'}))
        .then(user => {
            expect(user).to.exist
            expect(user.username).to.equal('wendylee')
            expect(user.email).to.equal('wendy@mail.com')
            //expect(user.password).to.equal('123456789') //cuando el pswd no está hasheado
            expect(bcrypt.compareSync('123456789', user.password)).to.be.true  //compareSync: para que no devuleva promesa , devuelve ya el boolean
        })
    })

//prueba de cuando quiero registar uno que ya existe
//caso negativo

    it('should fail when user already exists', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123456789', 10)
                        //lo creo directamente con el modelo
                return User.create({ role: 0, username: 'campanita', email: 'campa@mail.com', password: hash })
            })          //lo creo por medio de la lógica para que falle, encuentre el mismo user
            .then(() => registerUser( 0, 'campanita', 'campa@mail.com', '123456789' ))
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
   