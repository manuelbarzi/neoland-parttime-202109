const { model } = require('mongoose')
const { user } = require('../schemas')
                    //'User' es la colección en mongo
const User = model('User', user)

User.NUTRITIONIST = 0
User.PATIENT = 1

module.exports = User