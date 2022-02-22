const {model} = require('mongoose')
const user = require('../schemas/user')

const User = model('User', user)

module.exports = User