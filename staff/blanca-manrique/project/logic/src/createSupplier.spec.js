require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const createSupplier = require('./createSupplier')
const { errors: { NotFoundError, DuplicityError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('createSupplier', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user already exists', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                return User.create({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
            })
            .then(user => {
                return createSupplier(user.id, 'Suzhou Driving Strong Ltd.', 'su@zhou.com', 'suzhoudrivingstrong', '86 999557121', 'No 286 Dongping Street, Industrial Park, Suzhou, China', 'Yi Hui', true)
                    .then(res => {
                        expect(res).to.be.undefined

                        return Supplier.findOne({ user: user.id })
                    })
                    .then(supplier => {
                        expect(supplier).to.exist
                        expect(supplier.user.toString()).to.equal(user.id)
                        expect(supplier.name).to.equal('Suzhou Driving Strong Ltd.')
                        expect(supplier.email).to.equal('su@zhou.com')
                        expect(supplier.web).to.equal('suzhoudrivingstrong')
                        expect(supplier.phone).to.equal('86 999557121')
                        expect(supplier.adress).to.equal('No 286 Dongping Street, Industrial Park, Suzhou, China')
                        expect(supplier.contactPerson).to.equal('Yi Hui')
                        expect(supplier.tradeAssurance).to.be.true
                    })
            })

    })

    it('should fail when user does not exist', () => {
        const unknwonUserId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(user => createSupplier(unknwonUserId, 'Suzhou Driving Strong Ltd.', 'su@zhou.com', 'suzhoudrivingstrong', '86 999557121', 'No 286 Dongping Street, Industrial Park, Suzhou, China', 'Yi Hui', true))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknwonUserId} not found`)
            })
    })

    it('should fail when the user already exists and tries to create a new supplier with the same name as an existing supplier: name is unique', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                return (user.save())

            })
            .then((user) => {
                const supplier1 = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                return (supplier1.save())

                    .then(supplier1 => { //no se puede crear un supplier con el mismo name, phone or email que otro supplier ya existente
                        return createSupplier(user.id, 'Suzhou Driving Strong Ltd.', 'su@zhou1.com', 'suzhoudrivingstrong', '86 9995571211', 'No 286 Dongping Street, Industrial Park, Suzhou, China', 'Yi Hui', true)
                            .then(() => {
                                throw new Error('should not reach this point')
                            })
                            .catch(error => {
                                expect(error).to.exist
                                expect(error).to.be.instanceOf(DuplicityError)
                                expect(error.message).to.equal('supplier already exists')
                            })

                    })
            })

    })

    it('should fail when the user already exists and tries to create a new supplier with the same email as an existing supplier: email is unique', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                return (user.save())

            })
            .then((user) => {
                const supplier1 = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                return (supplier1.save())

                    .then(supplier1 => { //no se puede crear un supplier con el mismo name, phone or email que otro supplier ya existente
                        return createSupplier(user.id, 'Suzhou Driving Strong Ltd. 1', 'su@zhou.com', 'suzhoudrivingstrong', '86 9995571211', 'No 286 Dongping Street, Industrial Park, Suzhou, China', 'Yi Hui', true)
                            .then(() => {
                                throw new Error('should not reach this point')
                            })
                            .catch(error => {
                                expect(error).to.exist
                                expect(error).to.be.instanceOf(DuplicityError)
                                expect(error.message).to.equal('supplier already exists')
                            })

                    })
            })

    })

    it('should fail when the user already exists and tries to create a new supplier with the same phone as an existing supplier: phone is unique', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                return (user.save())

            })
            .then((user) => {
                const supplier1 = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                return (supplier1.save())

                    .then(supplier1 => { //no se puede crear un supplier con el mismo name, phone or email que otro supplier ya existente
                        return createSupplier(user.id, 'Suzhou Driving Strong Ltd. 1', 'su@zhou1.com', 'suzhoudrivingstrong', '86 999557121', 'No 286 Dongping Street, Industrial Park, Suzhou, China', 'Yi Hui', true)
                            .then(() => {
                                throw new Error('should not reach this point')
                            })
                            .catch(error => {
                                expect(error).to.exist
                                expect(error).to.be.instanceOf(DuplicityError)
                                expect(error.message).to.equal('supplier already exists')
                            })

                    })
            })

    })

    after(() => disconnect())
})