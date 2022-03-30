const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')

const createNote = require('./createNote')
const updateNote = require('./updateNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')
const deleteNote = require('./deleteNote')
const addCommentToNote = require('./addCommentToNote')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,

    createNote,
    updateNote,
    retrieveNotes,
    retrievePublicNotes,
    retrievePublicNotesFromUser,
    deleteNote,
    addCommentToNote 
}