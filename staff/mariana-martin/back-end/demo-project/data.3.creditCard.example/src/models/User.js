
//me traigo la función model que me permite generar un modelo de la caja de mongoose
const { model } = require('mongoose')
//(necesito importar el esquema para que se use en este modelo)
const { user } = require('../schemas')
 

// en es modelo el nombre del modelo y el esquema que define las porpiedades de ese modelo: 
const User = model('User', user)

module.exports = User


