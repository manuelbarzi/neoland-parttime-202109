const registerUserH = require('./registerUserH')
const authenticateUserH = require('./authenticateUserH')
const retrieveUserH = require('./retrieveUserH')
const updateUserH = require('./updateUserH')
const deleteUserH = require('./deleteUserH')

const createNoteH = require('./createNoteH')
const updateNoteH = require('./updateNoteH')
const retrieveNotesH = require('./retrieveNotesH')
const retrievePublicNotesFromUserH = require('./retrievePublicNotesFromUserH')
const   deleteNoteH = require('./deleteNoteH')

module.exports = {
    registerUserH,
    authenticateUserH,
    retrieveUserH,
    updateUserH,
    deleteUserH,

    createNoteH,
    updateNoteH,
    retrieveNotesH,
    retrievePublicNotesFromUserH,
    deleteNoteH
}