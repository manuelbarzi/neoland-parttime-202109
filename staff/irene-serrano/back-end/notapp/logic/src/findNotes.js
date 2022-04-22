//encuentra notas en base a unos criterios: fecha, texto,color

const { Note, User } = require("data/src/models")

function findNotes(userId, filter ){

    return User.findById(userId)
     .then(user=>{
        if(user){
            return Note.find(filter)
            .then(notes => notes)

        }
    })

}
module.exports = findNotes