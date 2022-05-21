const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updatePassword = require('./updatePassword')
const updateEmail = require('./updateEmail')
const deleteUser = require('./deleteUser')
const createPost = require('./createPost')
const deletePost = require('./deletePost')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    updatePassword,
    updateEmail,
    createPost,
    deletePost,
}
