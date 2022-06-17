require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier, Product } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const createProduct = require('./createProduct')
const { errors: { NotFoundError, DuplicityError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('createProduct', () => {
    before(() => connect(MONGODB_URL))

    it('should succeed when user and supplier already exist', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })

                return Promise.all([user.save(), supplier.save()])
            })
            .then(([user, supplier]) => {
                return createProduct(user.id, supplier.id, '8344444067581263', 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', 'Wine opener', 'home and kitchen', 'OEM', 'sustainable one stop', 'stainless steel', 7, 23)
                    .then(res => {
                        expect(res).to.be.undefined

                        return Product.findOne({ supplier: supplier.id })
                    })
                    .then(product => {
                        expect(product).to.exist
                        expect(product.supplier.toString()).to.equal(supplier.id)
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

    it('should fail when user and supplier already exist, and tries to create a new product with the same supplierProductId as an existing product: supplierProductId is unique', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const supplier = new Supplier({ user: user.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })

                return Promise.all([user.save(), supplier.save()])
            })
            .then(([user,supplier]) => {
                const product = new Product({user:user.id, supplier: supplier.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })
                return(product.save())
                
                    .then(product => { //no se puede crear un producto con el mismo supplierProductId que otro producto ya existente --> es unico
                        return createProduct(user.id, supplier.id, '8344444067581263', 'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1', 'Office Chair', 'office and stationery', 'Jingtian', 'ergonomic mesh office chair', 'polyester mesh', 6, 98)
                            .then(() => {
                                throw new Error('should not reach this point')
                            })
                            .catch(error => {
                                expect(error).to.exist
                                expect(error).to.be.instanceOf(DuplicityError)
                                expect(error.message).to.equal('product with reference 8344444067581263 already exists')
                            })

                    })
            })

    })

    it('should fail when user does not exist', () => {
        const unknwonUserId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                return Supplier.create({ user: unknwonUserId, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
            })
            .then(supplier => createProduct(unknwonUserId, supplier.id, '8344444067581263', 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', 'Wine opener', 'home and kitchen', 'OEM', 'sustainable one stop', 'stainless steel', 7, 23))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknwonUserId} not found`)
            })
    })

    it('should fail when user already exists but supplier does not exist', () => {
        const unknwonSupplierId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)
                return User.create({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
            })
            .then(user => createProduct(user.id, unknwonSupplierId, '8344444067581263', 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', 'Wine opener', 'home and kitchen', 'OEM', 'sustainable one stop', 'stainless steel', 7, 23))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`supplier with id ${unknwonSupplierId} not found`)
            })
    })

    after(() => disconnect())
})