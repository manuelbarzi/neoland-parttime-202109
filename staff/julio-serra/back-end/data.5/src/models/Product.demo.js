const { connect, disconnect } = require('mongoose')
const Product = require('./User')

connect('mongodb://localhost:27017/demo-db')
    //trabajamos con promesas
    .then(() => console.log('conectado piratilla'))
    .then(() => Product.collection.drop()) // borrar los productos de la coleccion

    //crear usuario
    .then(() => Product.create({ brand: 'Nike', model: 'Air Max', size: 43, stock: '100', price: '120', color: 'white', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb841190-e301-4f4e-8a7c-702526513bb3/air-max-sc-leather-zapatillas-RG66Z2.png' }))
    .then(() => Product.create({ brand: 'Nike', model: 'Air Max 90', size: 42, stock: '100', price: '140', color: 'black', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb841190-e301-4f4e-8a7c-702526513bb3/air-max-sc-leather-zapatillas-RG66Z2.png' }))


    .then(() => disconnect)
    .then(() => console.log('Desconectado piratilla'))
