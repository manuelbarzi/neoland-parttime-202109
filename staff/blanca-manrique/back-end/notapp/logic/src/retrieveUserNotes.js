const {models : { Note } } = require('data')

function retrieveUserNotes (userId){

    return  Note.find({user : userId})
    .then(notes => notes)
}
module.exports = retrieveUserNotes