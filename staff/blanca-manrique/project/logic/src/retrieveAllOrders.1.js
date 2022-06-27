// const { models: { User, Order, Variant, Product, Supplier } } = require('data')
// const {
//     validators: { validateId },
//     errors: { NotFoundError }
// } = require('commons')


// function retrieveAllOrders(userId) {
//     validateId(userId, 'user id')

//     return User.findById(userId)
//         .then((user) => {
//             if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//             return Order.find({ user: userId }).populate('items.variant').lean()
//         })
//         .then(orders => {
//             if (orders.length === 0) throw new NotFoundError(`user with id ${userId} has no created orders`)
//             //find variant y después hacer el forEach, en ese find variant me hago un populate de product
//             //entonces ya voy a tener acceso a const { product: { supplier } } = variant, es decir, al supplier ENTERO
//             //una vez que tengo el supplier puedo hacer un forEach de que cada orden tenga los datos de su supplier 
//             const _items = orders.map(order => order.items)

//             const variantIds = _items.forEach(_item => _item.variant)
//             return Variant.find({ _id: { $in: variantIds } })
//                 .then(variants => {
//                     const productId = variants.map(variant => variant.product)
//                     const { supplier } = productId

//                     return Supplier.findById(supplier)
//                 })
//                 .then(supplier => {
//                     orders.forEach(order => {
//                         order.id = order._id.toString()
//                         delete order._id
//                         delete order.__v

//                         order.items.forEach(item => { //limpiamos cada item del array
//                             item.id = item._id.toString()
//                             delete item._id

//                             item.variantSize = item.variant.size //arriba hemos hecho a order un populate de items.variant = queremos que cada item tenga el color y talla de la variante. No borramos aquí la propiedad variant: delete item.variant, ya que más abajo necesitamos acceder a variant.product, si la borramos ahora, después no va a encontrar product. Una vez que extraigamos de product lo que necesitamos, entonces borramos para cada item la propiedad variant 
//                             item.variantColor = item.variant.color
//                         })

//                         order.supplierName = supplier.name
//                         order.supplierEmail = supplier.email
//                         order.supplierPhone = supplier.phone
//                         order.supplierAdress = supplier.adress

//                     })
//                     return orders
//                 })


//         })

// }


// function retrieveAllOrders(userId) {
//     validateId(userId, 'user id')

//     return User.findById(userId)
//         .then((user) => {
//             if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//             return Order.find({ user: userId }).populate('items.variant').lean()
//                 .then(orders => {

//                     if (orders.length === 0) throw new NotFoundError(`user with id ${userId} has no created orders`)

//                     for (let i = 0; i < orders.length - 1; i++) {
//                         var variantIds = orders[i].items.variant
//                     }
//                     return Variant.find({ _id: { $in: variantIds } }).populate('product').lean()
//                         .then(variantId => {
//                             const productId = variantId.product
//                             return Product.findById(productId).populate('supplier').lean()
//                         })
//                         .then(product => {
//                             const supplierId = product.supplier
//                             return Supplier.findById(supplierId)
//                         })
//                         .then(supplier => {
//                             orders.forEach(order => {
//                                 order.id = order._id.toString()
//                                 delete order._id
//                                 delete order.__v

//                                 order.supplierName = supplier.name
//                                 order.supplierEmail = supplier.email
//                                 order.supplierPhone = supplier.phone
//                                 order.supplierAdress = supplier.adress

//                                 order.items.forEach(item => { //limpiamos cada item del array
//                                     item.id = item._id.toString()
//                                     delete item._id

//                                     item.variantSize = item.variant.size //arriba hemos hecho a order un populate de items.variant = queremos que cada item tenga el color y talla de la variante. No borramos aquí la propiedad variant: delete item.variant, ya que más abajo necesitamos acceder a variant.product, si la borramos ahora, después no va a encontrar product. Una vez que extraigamos de product lo que necesitamos, entonces borramos para cada item la propiedad variant 
//                                     item.variantColor = item.variant.color

//                                     delete item.variant
//                                 })
//                                 return orders
//                             })
//                         })
//                 })
//         })

// }


// function retrieveAllOrders(userId) {
//     validateId(userId, 'user id')

//     return User.findById(userId)
//         .then((user) => {
//             if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//             return Order.find({ user: userId }).populate('items.variant').lean()
//                 .then(orders => {

//                     if (orders.length === 0) throw new NotFoundError(`user with id ${userId} has no created orders`)

//                     const variantId = orders[0].items[0].variant
//                     return Variant.findById(variantId).populate('product').lean()
//                         .then(variant => {
//                             const productId = variant.product
//                             return Product.findById(productId).populate('supplier').lean()
//                         })
//                         .then(product => {
//                             const supplierId = product.supplier
//                             return Supplier.findById(supplierId)
//                         })
//                         .then(supplier => {
//                             orders.forEach(order => {
//                                 order.id = order._id.toString()
//                                 delete order._id
//                                 delete order.__v

//                                 order.supplierName = supplier.name
//                                 order.supplierEmail = supplier.email
//                                 order.supplierPhone = supplier.phone
//                                 order.supplierAdress = supplier.adress

//                                 order.items.forEach(item => { //limpiamos cada item del array
//                                     item.id = item._id.toString()
//                                     delete item._id

//                                     item.variantSize = item.variant.size //arriba hemos hecho a order un populate de items.variant = queremos que cada item tenga el color y talla de la variante. No borramos aquí la propiedad variant: delete item.variant, ya que más abajo necesitamos acceder a variant.product, si la borramos ahora, después no va a encontrar product. Una vez que extraigamos de product lo que necesitamos, entonces borramos para cada item la propiedad variant 
//                                     item.variantColor = item.variant.color

//                                     delete item.variant
//                                 })
//                             })
//                             return orders
//                         })
//                 })
//         })

// }

// module.exports = retrieveAllOrders