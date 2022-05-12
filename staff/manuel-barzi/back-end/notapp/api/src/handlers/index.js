const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')
const createNote = require('./createNote')
const updateNote = require('./updateNote')
const addCommentToNote = require('./addCommentToNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const retrieveNote = require('./retrieveNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    createNote,
    updateNote,
    addCommentToNote,
    retrieveNotes,
    retrievePublicNotes,
    retrieveNote
}