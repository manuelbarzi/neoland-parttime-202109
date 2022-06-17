require('dotenv').config()
const { mongoose: { connect, disconnect, Types: { ObjectId } }, models: { User, Supplier, Product } } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')
const retrieveAllProductsFromSupplier = require('./retrieveAllProductsFromSupplier')
const { errors: { NotFoundError, AuthError } } = require('commons')

const { env: { MONGODB_URL } } = process

describe('retrieveAllProductsFromSupplier', () => {
    before(() => connect(MONGODB_URL))

    it('should be successful if user and supplier already exist, if products belong to supplier and supplier belongs to user.', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                const supplier1 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user2.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })
                const supplier3 = new Supplier({ user: user2.id, name: 'Guangzhou City Furniture Co., Ltd.', email: 'guangzhou@qq.com', web: 'guangzhoufurniturecity', phone: '86 861319800', adress: 'No 14, Guixiang Street, Tianxin, Baiyun District, Guangzhou City, Guangdong, China', contactPerson: 'Kevin Han', tradeAssurance: true })

                const product1 = new Product({ supplier: supplier1.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })
                const product2 = new Product({ supplier: supplier2.id, supplierProductId: '975293776332334T', supplierProductUrl: 'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1', name: 'Office Chair', category: 'office and stationery', brand: 'Jingtian', model: 'ergonomic mesh office chair', material: 'polyester mesh', price: 6, salePrice: 98 })
                const product3 = new Product({ supplier: supplier2.id, supplierProductId: '975754655912001G', supplierProductUrl: 'https://www.alibaba.com/product-detail/Garden-Sofa-Hot-Selling-High-Quality_1600458025514.html?spm=a2700.galleryofferlist.normal_offer.d_image.5eec62a1VhwQWb&s=p', name: 'Garden Sofa Aluminum', category: 'gardening', brand: 'XMLyuan', model: 'garden sofa three seat aluminum', material: 'aluminum alloy', price: 221, salePrice: 419 })
                const product4 = new Product({ supplier: supplier2.id, supplierProductId: '975964666482145G', supplierProductUrl: 'https://www.alibaba.com/product-detail/Garden-Sofa-Outdoor-Lounge-Cheap-Garden_1600114083787.html?spm=a2700.galleryofferlist.normal_offer.d_image.5eec62a1VhwQWb&s=p', name: 'Garden Sofa Wood', category: 'gardening', brand: 'XMLyuan', model: 'garden sofa three seat acacia wood', material: 'acacia wood', price: 230, salePrice: 451 })
                const product5 = new Product({ supplier: supplier3.id, supplierProductId: '6221230009633952', supplierProductUrl: 'https://www.alibaba.com/product-detail/Balance-Pilates-Ball-Stability-Pilates-Fitness_1600233369311.html?spm=a2700.galleryofferlist.normal_offer.d_title.86dac369ohVZTg&s=p', name: 'Pilates Balance Ball', category: 'sports and outdoors', brand: 'Engine', model: 'yoga hemisphere ball', material: 'Pvc', price: 13, salePrice: 69 })

                return Promise.all([
                    user1.save(),
                    user2.save(),
                    supplier1.save(),
                    supplier2.save(),
                    supplier3.save(),
                    product1.save(),
                    product2.save(),
                    product3.save(),
                    product4.save(),
                    product5.save()
                ])
            })
            .then(([user1, user2, supplier1, supplier2, supplier3, product1, product2, product3, product4, product5]) => {
                return retrieveAllProductsFromSupplier(user2.id, supplier2.id)
                    .then(products => {
                        expect(products).to.exist
                        expect(products).to.be.instanceOf(Array)
                        expect(products).to.have.lengthOf(3)

                        products.forEach(product => {
                            expect(product.supplierProductId === '975293776332334T' || product.supplierProductId === '975754655912001G' || product.supplierProductId === '975964666482145G').to.be.true

                            if (product.supplierProductId === '975293776332334T') {
                                expect(product.supplierProductUrl === 'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1')
                                expect(product.name === 'Garden Sofa Aluminum')
                                expect(product.category === 'office and stationery')
                                expect(product.brand === 'Jingtian')
                                expect(product.model === 'ergonomic mesh office chair')
                                expect(product.material === 'polyester mesh')
                                expect(product.price === 6)
                                expect(product.SalePrice === 98)
                            }

                            else if (product.supplierProductId === '975754655912001G') {
                                expect(product.supplierProductUrl === 'https://www.alibaba.com/product-detail/Garden-Sofa-Hot-Selling-High-Quality_1600458025514.html?spm=a2700.galleryofferlist.normal_offer.d_image.5eec62a1VhwQWb&s=p')
                                expect(product.name === 'Garden Sofa Aluminum')
                                expect(product.category === 'gardening')
                                expect(product.brand === 'XMLyuan')
                                expect(product.model === 'garden sofa three seat aluminum')
                                expect(product.material === 'aluminum alloy')
                                expect(product.price === 221)
                                expect(product.SalePrice === 419)
                            }

                            else if (product.supplierProductId === '975964666482145G') {
                                expect(product.supplierProductUrl === 'https://www.alibaba.com/product-detail/Garden-Sofa-Outdoor-Lounge-Cheap-Garden_1600114083787.html?spm=a2700.galleryofferlist.normal_offer.d_image.5eec62a1VhwQWb&s=p')
                                expect(product.name === 'Garden Sofa Wood')
                                expect(product.category === 'gardening')
                                expect(product.brand === 'XMLyuan')
                                expect(product.model === 'garden sofa three seat acacia wood')
                                expect(product.material === 'acacia wood')
                                expect(product.price === 230)
                                expect(product.SalePrice === 451)
                            }

                        })
                    })
            })

    })

    it('should fail when supplier has not assigned products: products.lenght === 0 ', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                const supplier1 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user2.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })
                const supplier3 = new Supplier({ user: user2.id, name: 'Guangzhou City Furniture Co., Ltd.', email: 'guangzhou@qq.com', web: 'guangzhoufurniturecity', phone: '86 861319800', adress: 'No 14, Guixiang Street, Tianxin, Baiyun District, Guangzhou City, Guangdong, China', contactPerson: 'Kevin Han', tradeAssurance: true })

                return Promise.all([
                    user1.save(),
                    user2.save(),
                    supplier1.save(),
                    supplier2.save(),
                    supplier3.save()
                ])
            })
            .then(([user1, user2, supplier1, supplier2, supplier3, product1, product2, product3, product4, product5]) => {
                return retrieveAllProductsFromSupplier(user2.id, supplier2.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`supplier with id ${supplier2.id} has no assigned products`)
                    })
            })

    })

    it('should fail when products do not belong to user', () => {
        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                const supplier1 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user1.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })

                const product1 = new Product({ supplier: supplier1.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })
                const product2 = new Product({ supplier: supplier1.id, supplierProductId: '975293776332334T', supplierProductUrl: 'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1', name: 'Office Chair', category: 'office and stationery', brand: 'Jingtian', model: 'ergonomic mesh office chair', material: 'polyester mesh', price: 6, salePrice: 98 })


                return Promise.all([
                    user1.save(),
                    user2.save(),
                    supplier1.save(),
                    supplier2.save(),
                    product1.save(),
                    product2.save()
                ])
            })
            .then(([user1, user2, supplier1, supplier2, product1, product2]) => {
                return retrieveAllProductsFromSupplier(user2.id, supplier1.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.equal(`user with id ${user2.id} is not authorised to retrieve products from other user`)
                    })
            })

    })

    it('should fail when user does not exist', () => {
        const unknwonUserId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                const supplier1 = new Supplier({ user: user1.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
                const supplier2 = new Supplier({ user: user2.id, name: 'Yi Wu Import And Export Co., Ltd.', email: 'wu@yi.com', web: 'wuyitrain', phone: '86 753227010', adress: 'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China', contactPerson: 'Ma Yue', tradeAssurance: true })
                const supplier3 = new Supplier({ user: user2.id, name: 'Guangzhou City Furniture Co., Ltd.', email: 'guangzhou@qq.com', web: 'guangzhoufurniturecity', phone: '86 861319800', adress: 'No 14, Guixiang Street, Tianxin, Baiyun District, Guangzhou City, Guangdong, China', contactPerson: 'Kevin Han', tradeAssurance: true })

                return Promise.all([
                    user1.save(),
                    user2.save(),
                    supplier1.save(),
                    supplier2.save(),
                    supplier3.save()
                ])
            })
            .then(([user1, user2, supplier1, supplier2, supplier3]) => retrieveAllProductsFromSupplier(unknwonUserId, supplier2.id))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${unknwonUserId} not found`)
            })
    })

    it('should fail when supplier does not exist', () => {
        const unknwonSupplierId = new ObjectId().toString()

        return Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany()])
            .then(() => {
                const hash = bcrypt.hashSync('121212', 10)

                const user1 = new User({ username: 'TiGreton', email: 'ti@greton.com', password: hash })
                const user2 = new User({ username: 'GaTon', email: 'ga@ton.com', password: hash })

                return Promise.all([
                    user1.save(),
                    user2.save()
                ])
            })
            .then(([user1, user2]) => retrieveAllProductsFromSupplier(user1.id, unknwonSupplierId))
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