class Product {
    constructor(id, name, price, description, image, category, quantity, createdAt, updatedAt) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.image = image
        this.category = category
        this.quantity = quantity
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

module.exports = Product