const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const updateUser = require('./update-user')
const unregisterUser = require('./unregisterUser')
const retrieveUser = require('./retrieve-user')
const createNote = require('./create-note')
const updateNote = require('./update-note')
const deleteNote = require('./delete-note')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')
const findNotes = require('./findNotes')
const addCommentToNote = require('./addCommentToNote')
const retrieveNote = require ('./retrieveNote')


module.exports = {
    registerUser,
    updateUser,
    unregisterUser,
    retrieveUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNotes,
    retrievePublicNotes,
    retrievePublicNotesFromUser,
    authenticateUser,
    addCommentToNote,
    findNotes,
    retrieveNote
}