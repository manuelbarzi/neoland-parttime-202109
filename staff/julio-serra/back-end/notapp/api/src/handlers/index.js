const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const unregisterUser = require('./unregisterUser')
const createNote = require('./createNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const addCommentToNote = require('./addCommentToNote')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    unregisterUser,
    retrieveNotes,
    retrievePublicNotes,
    updateNote,
    deleteNote,
    addCommentToNote,
    createNote
}