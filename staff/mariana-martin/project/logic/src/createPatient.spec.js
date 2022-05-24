require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const createPatient = require('./createPatient')
const { errors: { NotFoundError }} = require('commons')

const { env: { MONGODB_URL } } = process

describe('createPatient', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when admin exists and create a patient', () => {
debugger

        return User.deleteMany()
            .then(() => {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({ role: 0, image:'', username: 'Admin Prueba', email: 'admin@mail.com', password: hash })
            })
            .then(admin => {
                return createPatient(1, '', 'Patient Prueba', 'pat@mail.com', '123456789',  admin.id, 33, 55, 170, [60,60,80], 'weight gain' )
                    .then(res => {
                        expect(res).to.be.undefined //no devuelve nada la promise

                        return User.findOne({ patient: patient.id }) //busco en los user el id que tenga ese id
                    })
                    .then(patient => {
                        expect(patient).to.exist  //que esté definido
                        expect(patient.role).to.equal(1)
                        expect(patient.user.toString()).to.equal(patient.id) //user es el object id de mongo (id del patient) lo hago string y comparo
                        expect(patient.username).to.equal('Patient Prueba')
                        expect(patient.email).to.equal('pat@mail.com')
                      
                    })
            })
            
            //crear caso cuando no exista admin
    })
    after(() => disconnect())
})