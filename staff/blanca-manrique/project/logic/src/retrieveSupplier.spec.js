require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveSupplier = require('./retrieveSupplier')
const { errors: { NotFoundError, AuthError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('retrieveSupplier', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user and supplier already exists', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })

                return Promise.all([user.save(), supplier.save()])
            })
            .then(([user, supplier]) => {
                return retrieveSupplier(user.id, supplier.id)
                    .then(supplier => {
                        expect(supplier).to.exist
                        expect(supplier.user).to.be.instanceOf(ObjectId)
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

    it('should fail when supplier does not belong to user', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })
                const supplier3 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier4 = new Supplier({ user: user2.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })
                
                //supplier3 va con user1 - impares
                //supplier4 va con user2 - pares
                //demostraremos que el supplier 4 no es del user1

                return Promise.all([user1.save(), user2.save(), supplier3.save(), supplier4.save()])
            })
            .then(([user1, user2, supplier3, supplier4]) => {
                return retrieveSupplier(user1.id, supplier4.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.equal((`supplier with id ${supplier4.id} does not belong to user with id ${user1.id}`))
                    })
            })
    })

    it('should fail when user and supplier does not exist', () => {
        const unknownUserId = new ObjectId().toString()
        const unknownSupplierId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => retrieveSupplier(unknownUserId, unknownSupplierId))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal((`user with id ${unknownUserId} not found`) || (`supplier with id ${unknownSupplierId} not found`))
            })
    })

    it('should fail when user exit but supplier does not exist', () => {
        
        const unknownSupplierId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })

                return user.save()
            })
            .then(user => {
                return retrieveSupplier(user.id, unknownSupplierId)
            })
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`supplier with id ${unknownSupplierId} not found`)
            })
    })

    after(() => disconnect())
})