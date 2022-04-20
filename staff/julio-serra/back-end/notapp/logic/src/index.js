const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const updateUser = require('./update-user')
const unregisterUser = require('./unregisterUser')
const retrieveUser = require('./retrieve-user')
const createNote = require('./createNote')
const updateNote = require('./updateNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')
const findNotes = require('./findNotes')
const addCommentToNote = require('./addCommentToNote')
const retrieveNote = require ('./retrieveNote')
const deleteNote = require('./deleteNote')


module.exports = {
    registerUser,
    updateUser,
    unregisterUser,
    retrieveUser,
    createNote,
    updateNote,
    retrieveNotes,
    retrievePublicNotes,
    retrievePublicNotesFromUser,
    authenticateUser,
    addCommentToNote,
    findNotes,
    retrieveNote,
    deleteNote
}