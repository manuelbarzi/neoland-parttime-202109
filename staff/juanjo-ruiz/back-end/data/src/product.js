const Model = require('./model')

class Product extends Model {
    constructor(doc) {
        super(doc)
    }
}

Product.cache('products.json')

module.exports = Product