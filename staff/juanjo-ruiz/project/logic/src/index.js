const registerCompany = require('./registerCompany')
const authenticateCompany = require('./authenticateCompany')
const retrieveCompany = require('./retrieveCompany')
const updateCompany = require('./updateCompany')
const unregisterCompany = require('./unregisterCompany')
const createUser = require('./createUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')
const activateUser = require('./activateUser')
const disableUser = require('./disableUser')

module.exports = {
    registerCompany,
    authenticateCompany,
    retrieveCompany,
    updateCompany,
    unregisterCompany,
    createUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    activateUser,
    disableUser
}