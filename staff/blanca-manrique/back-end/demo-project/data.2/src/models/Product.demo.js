const {connect, disconnect} = require('mongoose')
const Product = require('./Product')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    .then(() => Product.collection.drop()) //Limpio la colección: borro todos los productos que tenía, así si quiero crear productos, me evito duplicados
    .then(() => Product.create({ brand: 'Nike', model: 'Air Max', size: 43, stock: 100, price: 120, color: 'black', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f442caeb-d894-4de7-8a83-b736e01ab548/air-max-90-g-zapatillas-de-golf-Jqzw8K.png'}))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))