//indexar los models

//importó los models que tengo
//y los exportó como objeto, y después elijo con destructuring el que quiero usar 

const User = require('./user')
const Product = require('./product')



module.exports = {
    User,
    Product
}