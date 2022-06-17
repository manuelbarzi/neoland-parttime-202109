require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveSuppliers = require('./retrieveSuppliers')
const { errors: { NotFoundError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('retrieveSuppliers', () => {
    before(() => connect(MONGODB_URL))

    it('should be successful when user already exists and there are suppliers that belong to this user.', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                const supplier1 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user2.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })
                const supplier3 = new Supplier({ user: user2.id, name: 'Guangzhou City Furniture Co., Ltd.', email: 'guangzhou@qq.com', web: 'guangzhoufurniturecity', phone: '86 861319800', adress: 'No 14, Guixiang Street, Tianxin, Baiyun District, Guangzhou City, Guangdong, China', contactPerson: 'Kevin Han', tradeAssurance: true })
                const supplier4 = new Supplier({ user: user1.id, name: 'Foshan Youda Furniture Co., Ltd.', email: 'foshan@qq.com', web: 'foshanYoudafurniture', phone: '86 230981165', adress: 'No. 21, Zhenxing Road, Mailang Xisha Industrial Zone, Longjiang Town, China', contactPerson: 'Lu Lu', tradeAssurance: true })


                return Promise.all([
                    user1.save(),
                    user2.save(),
                    supplier1.save(),
                    supplier2.save(),
                    supplier3.save(),
                    supplier4.save()
                ])
            })
            .then(([user1, user2, supplier1, supplier2, supplier3, supplier4]) => {
                return retrieveSuppliers(user1.id)
                    .then(suppliers => {
                        expect(suppliers).to.exist
                        expect(suppliers).to.be.instanceOf(Array)
                        expect(suppliers).to.have.lengthOf(2)

                        suppliers.forEach(supplier => {
                            expect(supplier.name === 'Suzhou Driving Strong Ltd.' || supplier.name === 'Foshan Youda Furniture Co., Ltd.').to.be.true

                            if (supplier.name === 'Suzhou Driving Strong Ltd.') {
                                expect(supplier.email === 'su@zhou.com')
                                expect(supplier.web === 'suzhoudrivingstrong')
                                expect(supplier.phone === '86 999557121')
                                expect(supplier.adress === 'No 286 Dongping Street, Industrial Park, Suzhou, China')
                                expect(supplier.contactPerson === 'Yi Hui')
                                expect(supplier.tradeAssurance).to.be.true
                            }
                            //si no --> estamos en el caso de supplier.name = 'Foshan...'
                            expect(supplier.email === 'foshan@qq.com')
                            expect(supplier.web === 'foshanYoudafurniture')
                            expect(supplier.phone === '86 230981165')
                            expect(supplier.adress === 'No. 21, Zhenxing Road, Mailang Xisha Industrial Zone, Longjiang Town, China')
                            expect(supplier.contactPerson === 'Lu Lu')
                            expect(supplier.tradeAssurance).to.be.true

                        })
                    })
            })

    })

    it('should fail when user does not exist', () => {
        const unknwonUserId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(user => retrieveSuppliers(unknwonUserId))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknwonUserId} not found`)
            })
    })

    it('should fail when user has not assigned suppliers', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                return Promise.all([
                    user1.save(),
                    user2.save()
                ])
            })
            .then(([user1, user2]) => {
                return retrieveSuppliers(user2.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`user with id ${user2.id} has no assigned suppliers`)
                    })
            })

    })

    after(() => disconnect())
})