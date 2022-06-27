require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier, Product } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveProduct = require('./retrieveProduct')
const { errors: { NotFoundError, AuthError } } = require('commons')


const { env: { MONGODB_URL } } = process

describe('retrieveProduct', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user, supplier and product already exists', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const product = new Product({ supplier: supplier.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })

                return Promise.all([user.save(), supplier.save(), product.save()])
            })
            .then(([user, supplier, product]) => {
                retrieveProduct(user.id, supplier.id, product.id)
                    .then(product => {
                        expect(product).to.exist
                        expect(product.supplier).to.be.instanceOf(ObjectId)
                        expect(product.supplierProductId).to.equal('8344444067581263')
                        expect(product.supplierProductUrl).to.equal('https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB')
                        expect(product.name).to.equal('Wine opener')
                        expect(product.category).to.equal('home and kitchen')
                        expect(product.brand).to.equal('OEM')
                        expect(product.model).to.equal('sustainable one stop')
                        expect(product.material).to.equal('stainless steel')
                        expect(product.price).to.equal(7)
                        expect(product.salePrice).to.equal(23)
                    })
            })

    })

    it('should fail when product does not belong to supplier', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier1 = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })
                const product3 = new Product({ supplier: supplier1.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })
                const product4 = new Product({ supplier: supplier2.id, supplierProductId: '975293776332334T', supplierProductUrl: 'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1', name: 'Office Chair', category: 'office and stationery', brand: 'Jingtian', model: 'ergonomic mesh office chair', material: 'polyester mesh', price: 6, salePrice: 98 })

                //product3 va con supplier1 - impares
                //product4 va con supplier2 - pares
                //demostraremos que el producto 4 no es del supplier1

                return Promise.all([user.save(), supplier1.save(), supplier2.save(), product3.save(), product4.save()])
            })
            .then(([user, supplier1, supplier2, product3, product4]) => {
                return retrieveProduct(user.id, supplier1.id, product4.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.equal((`product with id ${product4.id} does not belong to supplier with id ${supplier1.id}`))
                    })
            })
    })

    it('should fail when product does not belong to user', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                const supplier1 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user1.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })

                const product3 = new Product({ supplier: supplier1.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })
                const product4 = new Product({ supplier: supplier2.id, supplierProductId: '975293776332334T', supplierProductUrl: 'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1', name: 'Office Chair', category: 'office and stationery', brand: 'Jingtian', model: 'ergonomic mesh office chair', material: 'polyester mesh', price: 6, salePrice: 98 })

                //product4 va con supplier2 
                //supplier2 va con user1
                //demostraremos que el producto 4 no es del user2

                return Promise.all([user1.save(), user2.save(), supplier1.save(), supplier2.save(), product3.save(), product4.save()])
            })
            .then(([user1, user2, supplier1, supplier2, product3, product4]) => {
                return retrieveProduct(user2.id, supplier1.id, product4.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.equal((`product with id ${product4.id} does not belong to user with id ${user2.id}`))
                    })
            })
    })

    it('should fail when user and supplier exist but product does not exist', () => {
        const unknownProductId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })

                return Promise.all([user.save(), supplier.save()])
            })
            .then(([user, supplier]) => retrieveProduct(user.id, supplier.id, unknownProductId))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal((`product with id ${unknownProductId} not found`))
            })
    })

    after(() => disconnect())
})