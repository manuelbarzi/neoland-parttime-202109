require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier, Product, Variant } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const createVariant = require('./createVariant')
const { errors: { NotFoundError, DuplicityError, AuthError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('createVariant', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user, supplier and product already exist', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany(), Variant.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const product = new Product({ supplier: supplier.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })

                return Promise.all([user.save(), supplier.save(), product.save()])
            })
            .then(([user, supplier, product]) => {
                return createVariant(user.id, supplier.id, product.id, 'none', 'white', 55, 25)
                    .then(res => {
                        expect(res).to.be.undefined

                        return Variant.findOne({ supplier: supplier.id, product: product.id, size: 'none', color: 'white' })
                    })
                    .then(variant => {
                        expect(variant).to.exist
                        expect(variant.product.toString()).to.equal(product.id)
                        expect(variant.size).to.equal('none')
                        expect(variant.color).to.equal('white')
                        expect(variant.stockOnHand).to.equal(55)
                        expect(variant.criticalStock).to.equal(25)
                    })
            })

    })

    it('should fail when variant with the same supplier, product, size and color already exists, and tries to create a new variant with the same characteristics ', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany(), Variant.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const product = new Product({ supplier: supplier.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })

                return Promise.all([user.save(), supplier.save(), product.save()])
            })
            .then(([user, supplier, product]) => {
                const variant = new Variant({ product: product.id, size: 'none', color: 'white', stockOnHand: 55, criticalStock: 25 })
                return (variant.save())

                    .then(variant => { //no se puede crear una variante con el mismo supplier.id, product.id, size and color que otra variante ya existente --> DuplicityError
                        return createVariant(user.id, supplier.id, product.id, 'none', 'white', 55, 25)
                            .then(() => {
                                throw new Error('should not reach this point')
                            })
                            .catch(error => {
                                expect(error).to.exist
                                expect(error).to.be.instanceOf(DuplicityError)
                                expect(error.message).to.equal(`variant with supplier id ${supplier.id}, product id ${product.id}, size ${variant.size}, and color ${variant.color}, already exists`)
                            })

                    })
            })

    })

    it('should fail when user tries to create a new variant from a wrong product ', () => {

        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany(), Variant.deleteMany()])
        .then(() => {
            const hash = bcrypt.hashSync('121212', 10)
            const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
            const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

            const supplier1 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
            const supplier2 = new Supplier({ user: user2.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })

            const product3 = new Product({ supplier: supplier1.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })
            const product4 = new Product({ supplier: supplier2.id, supplierProductId: '975293776332334T', supplierProductUrl: 'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1', name: 'Office Chair', category: 'office and stationery', brand: 'Jingtian', model: 'ergonomic mesh office chair', material: 'polyester mesh', price: 6, salePrice: 98 })

            //product4 va con supplier2 
            //supplier2 va con user2
            //demostraremos que no podemos crear una variante de un producto erroneo

            return Promise.all([user1.save(), user2.save(), supplier1.save(), supplier2.save(), product3.save(), product4.save()])
        })
        .then(([user1, user2, supplier1, supplier2, product3,  product4]) => {
            return createVariant(user1.id, supplier1.id, product4.id, 'none', 'red', 40, 65)
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(AuthError)
                expect(error.message).to.equal(`product with id ${product4.id} does not belong to supplier with id ${supplier1.id}`)
            })
        })
    })

    it('should fail when a wrong user tries to create a new variant', () => {

        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany(), Variant.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })
                const supplier = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const product = new Product({ supplier: supplier.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })

                return Promise.all([user1.save(), user2.save(), supplier.save(), product.save()])
            })
            .then(([user1, user2, supplier, product]) => {
                return createVariant(user2.id, supplier.id, product.id, 'none', 'red', 40, 65)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.exist
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal(`product with id ${product.id} does not belong to user with id ${user2.id}`)
                })
            })
    })

    after(() => disconnect())
})