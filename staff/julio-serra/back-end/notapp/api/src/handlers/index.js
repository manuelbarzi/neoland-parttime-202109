const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const unregisterUser = require('./unregisterUser')
const createNote = require('./createNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const updateNote = require('./updateNote')
const addCommentToNote = require('./addCommentToNote')
const retrieveNote = require('./retrieveNote')
const deleteNote = require('./deleteNote')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    unregisterUser,
    retrieveNotes,
    retrievePublicNotes,
    updateNote,
    addCommentToNote,
    createNote,
    retrieveNote,
    deleteNote
}