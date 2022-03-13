const { Note } = require("data/src/models")

function retrieveNotes (userId, ownerId){

    if ( userId === ownerId){
        return  Note.find({user : userId})
            .then(notes => notes)
    }
    else {
        return  Note.find({user : ownerId, public: true})
        .then(notes => notes)
    }

}
module.exports = retrieveNotes