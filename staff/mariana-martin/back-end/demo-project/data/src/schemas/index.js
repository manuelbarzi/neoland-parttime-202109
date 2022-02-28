//LOS ESQUEMAS SE USAN PARA DEFINIR MODELOS, LOS QUE SE USAN SON LOS MODELOS.

const user = require('./user')
const product = require('./product')
const brand = require('./brand')
const stock = require('./stock')
const order = require('./order')

module.exports = {
    user,
    product,
    brand,
    stock,
    order
}

