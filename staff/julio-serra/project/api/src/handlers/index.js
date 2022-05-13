const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const deleteUser = require('./deleteUser')
const createSpace = require('./createSpace')
const retrieveSpace = require('./retrieveSpace')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    deleteUser,
    createSpace,
    retrieveSpace
}