const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')
const addCommentToNote = require('./addCommentToNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    addCommentToNote
}