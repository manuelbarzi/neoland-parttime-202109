const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const deleteUser = require('./deleteUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')

const createNote = require('./createNote')
const retrieveNotes = require('./retrieveNotes')
const retrieveNote = require('./retrieveNote')
const retrievePublicNotes = require('./retrievePublicNotes')
const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')

const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const findPublicNotes = require('./findPublicNotes')
const findNotes = require('./findNotes')


module.exports = {
    registerUser,
    retrieveUser,
    authenticateUser,
    deleteUser,
    updateUser,
    unregisterUser,
    createNote,
    retrieveNotes,
    retrieveNote,
    retrievePublicNotes,
    retrievePublicNotesFromUser,
    updateNote,
    deleteNote,
    findPublicNotes,
    findNotes

}