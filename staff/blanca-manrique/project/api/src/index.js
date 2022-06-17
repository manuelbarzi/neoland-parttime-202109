require('dotenv').config()

const { mongoose: { connect } } = require('data')
const express = require('express')
const cors = require('cors')

const { registerUser, authenticateUser, retrieveUser, updateUser, deleteUser, createSupplier, retrieveSupplier, retrieveSuppliers, updateSupplier, createProduct, retrieveProduct, retrieveAllProductsFromSupplier, findSuppliers, updateProduct, createVariant, retrieveVariant, retrieveAllVariantsFromProduct, updateVariant, deleteVariant, createOrder, retrieveOrder, retrieveAllOrders, retrieveOrdersBySupplier, deleteItemFromOrder, addItemToOrder, deleteOrder } = require('./handlers')
const { json } = require('express')
const generateOrder = require('./handlers/generateOrder')

const { env: { MONGODB_URL, PORT}} = process

connect(MONGODB_URL)
    .then(() => {
        console.log('database connected')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json() 

        router.post('/users', jsonBodyParser, registerUser)
        router.post('/users/auth', jsonBodyParser, authenticateUser)
        router.get('/users', retrieveUser)
        router.patch('/users', jsonBodyParser, updateUser)
        router.delete('/users', jsonBodyParser, deleteUser)

        router.post('/suppliers', jsonBodyParser, createSupplier)
        router.patch('/suppliers/:supplierId', jsonBodyParser, updateSupplier)
        router.get('/suppliers', retrieveSuppliers)
        router.get('/suppliers/search', findSuppliers) 
        router.get('/suppliers/:supplierId', retrieveSupplier)

        router.post('/suppliers/:supplierId/products', jsonBodyParser, createProduct)
        router.get('/suppliers/:supplierId/products/:productId', retrieveProduct)
        router.patch('/suppliers/:supplierId/products/:productId', jsonBodyParser, updateProduct)
        router.get('/suppliers/:supplierId/products',retrieveAllProductsFromSupplier)

        router.post('/suppliers/:supplierId/products/:productId/variants', jsonBodyParser, createVariant)
        router.get('/suppliers/:supplierId/products/:productId/variants', retrieveAllVariantsFromProduct)
        router.get('/suppliers/:supplierId/products/:productId/variants/:variantId', retrieveVariant)
        router.patch('/suppliers/:supplierId/products/:productId/variants/:variantId', jsonBodyParser, updateVariant)
        router.delete('/suppliers/:supplierId/products/:productId/variants/:variantId', deleteVariant)
        router.get('/suppliers/:supplierId/orders', retrieveOrdersBySupplier)

        router.post('/orders', jsonBodyParser, createOrder)
        router.get('/orders/:orderId', retrieveOrder)
        router.get('/orders', retrieveAllOrders)
        router.post('/orders/:orderId', jsonBodyParser, addItemToOrder)
        router.delete('/orders/:orderId/items/:itemId', deleteItemFromOrder)
        router.delete('/orders/:orderId', deleteOrder)
        router.patch('/orders/:orderId', jsonBodyParser, generateOrder)
        
        api.use('/api', router)

        api.listen(PORT, () => console.log(`server listening on ${PORT}`))
    })