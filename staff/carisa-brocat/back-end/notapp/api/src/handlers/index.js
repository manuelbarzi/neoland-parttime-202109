const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')
const createNote = require('./createNote')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const retrieveNotes = require('./retrieveNotes')
const retrieveNote = require('./retrieveNote')
const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')
const retrievePublicNotes = require('./retrievePublicNotes')
const addCommentToNote = require('./addCommentToNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNotes,
    retrieveNote,
    retrievePublicNotesFromUser,
    retrievePublicNotes,
    addCommentToNote,
}