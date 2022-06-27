require('dotenv').config()
const {mongoose: { connect, disconnect}, models: { User}} = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const authenticateNutritionist = require('./authenticateNutritionist')
const { errors: { AuthError}} = require('commons')

const { env: { MONGODB_URL }} = process

describe('authenticateUser', () => {
    before(() => connect(MONGODB_URL))

    //case 1: 

    it('should succeed when user already exists and credentials are correct', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({role: 0, username: 'campanita', email: 'campa@mail.com', password: hash})
            })
            .then(() => authenticateNutritionist('campa@mail.com', '123456789'))
            .then(userId => { //El authenticate devuelve el id del user
                expect(userId).to.exist
                expect(userId).to.be.a('string')

                return User.findOne({ email: 'campa@mail.com'}) //buscar al user 
                    .then(user => {
                        expect(user.id).to.equal(userId) //compruebo si el id que me devuelve el authenticate coincide con el se user
                    })
            })
    })
//case 2: when user doesn't exist
    it('should fail when user does not exist', () => {
        return User.deleteMany() //borro
            .then(() => authenticateNutritionist('campa@mail.com', '123456789'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(AuthError)
                expect(error.message).to.equal('wrong credentials')
            })
    })
//case 3: when email is wrong

    it('should fail when user already exists and email is wrong', () => {
        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({ role:0, username: 'campanita', email: 'campa@mail.com', password: hash})
            })                          //el email que buscará será: wrong-campa@mail.com
            .then(() => authenticateNutritionist('wrong-' + 'campa@mail.com', '123456789'))
            .then(() => {
                throw new Error('should not reach this point')

            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(AuthError)
                expect(error.message).to.equal('wrong credentials')
            })
    })

    //case 4: when email is correct but psw is wrong

    it('should fail when user already exists and password is wrong', () => {
        debugger
        return User.deleteMany()
        
            .then(()=> {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({role:0, username:'campanita', email:'campa@mail.com', password: hash})
            })                                              //manda el psw mal 123456789wrong
            .then(()=> authenticateNutritionist('campa@mail.com', '123456789' + '-wrong'))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(AuthError)
                expect(error.message).to.equal('wrong credentials')
            })
    })

    after(()=> disconnect)
})