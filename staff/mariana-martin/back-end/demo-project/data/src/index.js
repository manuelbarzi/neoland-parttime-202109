//este index es el paquete de entrada
//data será el paquete que utiliza el paquete de mongo

//exportar mongoose y los modelos
const mongoose = require('mongoose')
const models = require('./models')

module.exports = {
    mongoose,
    models
}