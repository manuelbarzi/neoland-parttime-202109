const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const deleteUser = require('./deleteUser')
const updateUser = require('./updateUser')
const retrieveUserNotes = require('./retrieveUserNotes')

module.exports = {
    registerUser,
    retrieveUser,
    authenticateUser,
    deleteUser,
    updateUser,
    retrieveUserNotes 
}