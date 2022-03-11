const { model } = require('mongoose')
const { comment } = require('../schemas')

const Commnet = model('Comment', comment)

module.exports = Comment