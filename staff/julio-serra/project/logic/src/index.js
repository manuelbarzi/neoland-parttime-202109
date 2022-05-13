const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const deleteUser = require('./deleteUser')
const retrieveUser = require('./retrieveUser')
const createSpace = require('./createSpace')
const retrieveSpace = require('./retrieveSpace')
const deleteSpace = require('./deleteSpace')


module.exports = {
    registerUser,
    authenticateUser,
    deleteUser,
    retrieveUser,
    createSpace,
    retrieveSpace,
    deleteSpace
}