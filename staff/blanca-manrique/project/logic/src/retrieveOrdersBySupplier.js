const { models: { User, Supplier, Order } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError }
} = require('commons')

function retrieveOrdersBySupplier(userId, supplierId) {
    validateId(userId, 'user id')
    validateId(supplierId, 'supplier id')

    return Promise.all([User.findById(userId).lean(), Supplier.findById(supplierId).lean()])
    .then(([user, supplier]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!supplier) throw new NotFoundError(`supplier with id ${supplierId} not found`)
            // if(supplier.user.toString() !== userId) throw new AuthError(`user with id ${userId} is not authorised to retrieve products from other user`)
            
            return Order.find({ user: userId, supplier: supplierId }).lean()
            //aquí está el problema: en la base de datos NO existe order.supplier, por lo tanto no va a filtrar por supplier: supplierId
            .then(orders => {
                //Limpiamos (sanitize)
                orders.forEach(order => {
                    order.id = order._id.toString()

                    order.items.forEach(item =>{ //limpiamos cada item del array
                        item.id = item._id.toString() 
                        delete item._id
                    }) 
                    
                    delete order._id
                    delete order.__v
    
                })
                return orders
            })
        })
}

module.exports = retrieveOrdersBySupplier