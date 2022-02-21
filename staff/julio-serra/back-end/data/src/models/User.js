const { model } = require('mongoose')
const { user } = require('../models/user')

const User = model('User', user)

module.exports = User