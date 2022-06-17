//TODO recuperar datos del proveedor
const { models: { User, Order, Variant, Product, Supplier } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError }
} = require('commons')


function retrieveAllOrders(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Order.find({ user: userId }).populate('items.variant').lean()
        })
        .then(orders => {
            if (orders.length === 0) throw new NotFoundError(`user with id ${userId} has no created orders`)

            orders.forEach(order => {
                order.id = order._id.toString()
                delete order._id
                delete order.__v

                order.items.forEach(item => { //limpiamos cada item del array
                    item.id = item._id.toString()
                    delete item._id

                    item.variantSize = item.variant.size //arriba hemos hecho a order un populate de items.variant = queremos que cada item tenga el color y talla de la variante. No borramos aquí la propiedad variant: delete item.variant, ya que más abajo necesitamos acceder a variant.product, si la borramos ahora, después no va a encontrar product. Una vez que extraigamos de product lo que necesitamos, entonces borramos para cada item la propiedad variant 
                    item.variantColor = item.variant.color

                    delete item.variant
                    // const { product } = order.items[0].variant
                    // order.product = order.items[0].variant.product
                })


            })
            return orders
        })
}

module.exports = retrieveAllOrders