const { model } = require('mongoose')
const { user } = require('../schemas')
                    //'User' es la colección en mongo
const User = model('User', user)

module.exports = User