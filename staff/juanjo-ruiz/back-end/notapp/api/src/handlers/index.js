const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const createNote = require('./createNote')
const updateNote = require('./updateNote')
const deleteNote = require('./updateNote')
const retrieveNotes = require('./retrieveNotes')
const retrieveNotesOwnerId = require('./retrieveNotesOwnerId')
 
module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNotes,
    retrieveNotesOwnerId
}