//Indexador de lógicas:

//CRUD DE USER
const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')

//CRUD DE NOTE
const createNote = require('./createNote')
const retrieveNote = require('./retrieveNote')
const retrieveNotes = require('./retrieveNotes')
const retrievePublicNotes = require('./retrieveNotes')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    createNote,
    retrieveNote,
    retrieveNotes,
    retrievePublicNotes,
    updateNote,
    deleteNote
  
}