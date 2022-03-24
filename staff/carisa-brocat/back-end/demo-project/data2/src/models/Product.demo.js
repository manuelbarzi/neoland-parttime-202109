const { connect, disconnect } = require('mongoose')
const Product = require('./Product')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

   .then(() => Product.collection.drop())

    .then(() => Product.create({ brand: 'Nike', model: 'Air Max', size: 43, stock: 100, price: 120, color: 'black', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f442caeb-d894-4de7-8a83-b736e01ab548/air-max-90-g-zapatillas-de-golf-Jqzw8K.png' }))
    .then(() => Product.create({ brand: 'Nike', model: 'Air Max', size: 42, stock: 100, price: 120, color: 'black', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f442caeb-d894-4de7-8a83-b736e01ab548/air-max-90-g-zapatillas-de-golf-Jqzw8K.png' }))
    .then(() => Product.create({ brand: 'Nike', model: 'Vapor Max', size: 42, stock: 100, price: 110, color: 'black', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/75f3e0fa-8d9b-4e1e-84b4-5065ba92d722/air-vapormax-2021-fk-zapatillas-nino-a-cVcTnS.png' }))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))