const { model } = require('mongoose')
const { space } = require('../schemas')

const Space = model('Space', space)

module.exports = Space