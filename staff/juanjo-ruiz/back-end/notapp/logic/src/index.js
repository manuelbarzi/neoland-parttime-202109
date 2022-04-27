const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const createNote = require('./createNote')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const retrieveNote = require('./retrieveNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')
const findPublicNotes = require('./findPublicNotes')
const findNotes = require('./findNotes')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNote,
    retrieveNotes,
    retrievePublicNotes,
    retrievePublicNotesFromUser,
    findPublicNotes,
    findNotes 
}