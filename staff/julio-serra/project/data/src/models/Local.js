const model = require('mongoose')
const { local } = require('../schemas')

const Local = model('Local', local)

module.exports = Local