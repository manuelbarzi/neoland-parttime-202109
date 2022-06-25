const { models: { User, Order, Variant, Supplier } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError }
} = require('commons')

function retrieveOrder(userId, orderId) {
    validateId(userId, 'user id')
    validateId(orderId, 'order id')

    return Promise.all([User.findById(userId).lean(), Order.findById(orderId).populate('items.variant').lean()])
        .then(([user, order]) => {
            if (!user) throw new NotFoundError("user does not exist")
            if (!order) throw new NotFoundError("order does not exist")
            if (order.user.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to retrieve order with id ${orderId}`)

            //Limpiamos la orden antes de devolverla
            order.id = order._id.toString()

            delete order._id
            delete order.__v

            const { items, notes } = order

            if (items.length && notes.length) {
                items.forEach(item => {
                    item.id = item._id.toString()

                    delete item._id
                    delete item.__v

                    item.variantSize = item.variant.size //arriba hemos hecho a order un populate de items.variant = queremos que cada item tenga el color y talla de la variante. No borramos aquí la propiedad variant: delete item.variant, ya que más abajo necesitamos acceder a variant.product, si la borramos ahora, después no va a encontrar product. Una vez que extraigamos de product lo que necesitamos, entonces borramos para cada item la propiedad variant 
                    item.variantColor = item.variant.color
                    item.variantId = item.variant._id.toString()
                    item.productId = item.variant.product
                })

                notes.forEach(note => {
                    note.id = note._id.toString()
                    delete note._id
                    delete note.__v
                })

                //El objetivo es sacar los datos del supplier de las variantes --> todas las variantes tienen que tener el mismo supplier
                const variantId = order.items[0].variant
                return Variant.findById(variantId).populate('product').lean()
                    .then(variant => {
                        const { product: { supplier } } = variant //Me traigo de variant.product -> el supplier entero

                        order.variantProductName = variant.product.name //Quiero que order tenga el nombre del producto de cada una de las variantes

                        order.items.forEach(item => { //no borramos antes: no encuentra product si borramos en el primer forEach. Una vez que hemos accedido a items.variant.product, podemos borrar para cada item la propiedad variant
                            delete item.variant
                        })

                        return Supplier.findById(supplier) //busco el supplier y si le encuentro entonces
                    })
                    .then(supplier => {
                        //queremos que orden tenga 3 nuevas propiedades
                        order.supplier = supplier._id.toString()
                        order.supplierName = supplier.name
                        order.supplierEmail = supplier.email
                        order.supplierPhone = supplier.phone
                        order.supplierAdress = supplier.adress

                        delete supplier //así podemos borrar todo el supplier, hay datos que NO necesitamos en la orden de compra
                        return order
                    })
                
            }
            else if (items.length && notes.length === 0){
                items.forEach(item => {
                    item.id = item._id.toString()

                    delete item._id
                    delete item.__v

                    item.variantSize = item.variant.size //arriba hemos hecho a order un populate de items.variant = queremos que cada item tenga el color y talla de la variante. No borramos aquí la propiedad variant: delete item.variant, ya que más abajo necesitamos acceder a variant.product, si la borramos ahora, después no va a encontrar product. Una vez que extraigamos de product lo que necesitamos, entonces borramos para cada item la propiedad variant 
                    item.variantColor = item.variant.color
                    item.variantId = item.variant._id.toString()
                    item.productId = item.variant.product
                })
                //El objetivo es sacar los datos del supplier de las variantes --> todas las variantes tienen que tener el mismo supplier
                const variantId = order.items[0].variant
                return Variant.findById(variantId).populate('product').lean()
                    .then(variant => {
                        const { product: { supplier } } = variant //Me traigo de variant.product -> el supplier entero

                        order.variantProductName = variant.product.name //Quiero que order tenga el nombre del producto de cada una de las variantes

                        order.items.forEach(item => { //no borramos antes: no encuentra product si borramos en el primer forEach. Una vez que hemos accedido a items.variant.product, podemos borrar para cada item la propiedad variant
                            delete item.variant
                        })

                        return Supplier.findById(supplier) //busco el supplier y si le encuentro entonces
                    })
                    .then(supplier => {
                        //queremos que orden tenga 3 nuevas propiedades
                        order.supplier = supplier._id.toString()
                        order.supplierName = supplier.name
                        order.supplierEmail = supplier.email
                        order.supplierPhone = supplier.phone
                        order.supplierAdress = supplier.adress

                        delete supplier //así podemos borrar todo el supplier, hay datos que NO necesitamos en la orden de compra
                        return order
                    })
            }
            else if (notes.length && items.length === 0){
                notes.forEach(note => {
                    note.id = note._id.toString()
                    delete note._id
                    delete note.__v
                })
                return order
            }
            else{
                return order
            }
        })
}
module.exports = retrieveOrder
