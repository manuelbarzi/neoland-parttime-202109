const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const deleteUser = require('./deleteUser')
const updateUser = require('./updateUser')
const createNote = require('./createNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const addCommentToNote = require('./addCommentToNote')
const removeCommentFromNote = require('./removeCommentFromNote')

module.exports = {
    registerUser,
    retrieveUser,
    authenticateUser,
    deleteUser,
    updateUser,
    createNote,
    retrieveNotes,
    retrievePublicNotes,
    retrievePublicNotesFromUser,
    updateNote,
    deleteNote,
    addCommentToNote,
    removeCommentFromNote
}