const {model} = require('mongoose')
const { request } = require('../schemas')


const Request = model('Request', request)

module.exports = Request