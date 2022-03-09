//Indexador de lógicas:

const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const createNote = require('./createNote')
const retrieveNote = require('./retrieveNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrieveNotes')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')


module.exports = {
    registerUser,
    retrieveUser,
    authenticateUser,
    createNote,
    retrieveNote,
    retrieveNotes,
    retrievePublicNotes,
    updateNote,
    deleteNote
  
}