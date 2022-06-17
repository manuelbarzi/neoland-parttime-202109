require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const updateSupplier = require('./updateSupplier')
const { errors: { AuthError, NotFoundError, DuplicityError } } = require('commons')


const { env: { MONGODB_URL } } = process

describe('updateSupplier', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user and supplier already exist, and name, phone or email from supplier are not changed or changed to ones that do not yet exist', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })


                return Promise.all([user.save(), supplier.save()])
            })
            .then(([user, supplier]) => {
                updateSupplier(user.id, supplier.id, 'Yi Wu Import And Export Co., Ltd.', 'wu@yi.com', 'wuyitrain', '86 999557121', 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', 'Ma Yue', true)
            })
            .then(() => {
                Supplier.find({ name: 'Suzhou Driving Strong Ltd.' }, { phone: '86 999557121' }, { email: 'su@zhou.com' })
                    .then(supplier => {
                        expect(supplier).to.exist
                        expect(supplier.name).to.equal('Suzhou Driving Strong Ltd.')
                        expect(supplier.email).to.equal('su@zhou.com')
                        expect(supplier.web).to.equal('wuyitrain')
                        expect(supplier.phone).to.equal('86 999557121')
                        expect(supplier.adress).to.equal('No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China')
                        expect(supplier.contactPerson).to.equal('Ma Yue')
                        expect(supplier.tradeAssurance).to.be.true
                    })
            })
    })

    it('should fail when user and supplier already exist, and name, phone or email from supplier changed to ones that already exist: name, phone and email are unique', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user.id, name: 'Guangzhou City Furniture Co., Ltd.', email: 'guangzhou@qq.com', web: 'guangzhoufurniturecity', phone: '86 861319800', adress: 'No 14, Guixiang Street, Tianxin, Baiyun District, Guangzhou City, Guangdong, China', contactPerson: 'Kevin Han', tradeAssurance: true })

                return Promise.all([user.save(), supplier.save(), supplier2.save()])
            })
            .then(([user, supplier2]) => {
                return updateSupplier(user.id, supplier2.id, 'Suzhou Driving Strong Ltd.', 'guangzhou@qq.com', 'guangzhoufurniturecity', '86 861319800', 'No 14, Guixiang Street, Tianxin, Baiyun District, Guangzhou City, Guangdong, China', 'Kevin Han', true)
            })
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('supplier with same credentials already exists')
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
                return updateSupplier(user1.id, supplier4.id, 'Yi Wu Import And Export Co., Ltd.', 'wu@yi.com', 'wuyitrain1', '86 753227010', 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', 'Ma Yue', true)
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

    it('should fail when user does not exist', () => {
        const unknownUserId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const supplier = new Supplier({ user: unknownUserId, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                return supplier.save()
            })
            .then(supplier => updateSupplier(unknownUserId, supplier.id, 'Suzhou Driving Strong Ltd.', 'su@zhou.com', 'suzhoudrivingstrong', '86 999557121', 'No 286 Dongping Street, Industrial Park, Suzhou, China', 'Yi Hui', true))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknownUserId} not found`)
            })
    })

    it('should fail when supplier does not exist', () => {
        const unknownSupplierId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                return User.create({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
            })
            .then(user => updateSupplier(user.id, unknownSupplierId, 'Suzhou Driving Strong Ltd.', 'su@zhou.com', 'suzhoudrivingstrong', '86 999557121', 'No 286 Dongping Street, Industrial Park, Suzhou, China', 'Yi Hui', true))
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