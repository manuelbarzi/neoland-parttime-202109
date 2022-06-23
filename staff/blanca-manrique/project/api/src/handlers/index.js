const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')

const createSupplier = require('./createSupplier')
const retrieveSupplier = require('./retrieveSupplier')
const retrieveSuppliers = require('./retrieveSuppliers')
const updateSupplier = require('./updateSupplier')
const findSuppliers = require('./findSuppliers')

const createProduct = require('./createProduct')
const retrieveProduct = require('./retrieveProduct')
const retrieveAllProductsFromSupplier = require('./retrieveAllProductsFromSupplier')
const updateProduct = require('./updateProduct')

const createVariant = require('./createVariant')
const retrieveVariant = require('./retrieveVariant')
const retrieveAllVariantsFromProduct = require('./retrieveAllVariantsFromProduct')
const updateVariant = require('./updateVariant')
const deleteVariant = require('./deleteVariant')

const createOrder = require('./createOrder')
const retrieveOrder = require('./retrieveOrder')
const retrieveAllOrders = require('./retrieveAllOrders')
const retrieveOrdersBySupplier = require('./retrieveOrdersBySupplier')
const deleteItemFromOrder = require('./deleteItemFromOrder')
const addItemToOrder = require('./addItemToOrder')
const deleteOrder = require('./deleteOrder')
const updateOrderStatus = require('./updateOrderStatus')
const addNoteToOrder = require('./addNoteToOrder')
const monthlyExpenses = require('./monthlyExpenses')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,

    createSupplier,
    retrieveSupplier,
    retrieveSuppliers,
    updateSupplier,
    findSuppliers,


    createProduct,
    retrieveProduct,
    retrieveAllProductsFromSupplier,
    updateProduct,

    createVariant,
    retrieveVariant,
    retrieveAllVariantsFromProduct,
    updateVariant,
    deleteVariant,

    createOrder,
    retrieveOrder,
    retrieveAllOrders,
    retrieveOrdersBySupplier,
    deleteItemFromOrder,
    addItemToOrder,
    addNoteToOrder,
    deleteOrder,
    updateOrderStatus,
    monthlyExpenses
}