const Model = require('./model')

class Product extends Model {
  constructor(doc) {
    super(doc, 'products.json')
  }
}

module.exports = Product