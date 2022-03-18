const { Note, User } = require('data/src/models')



function findNotes(userId, query, color, date){
    validateId(userId)
    validateString(userId, 'user id')
    query && validateString(query, 'query')
    color && validateString(color, 'color')
    date && validateDate(date, 'date')


    return User.findById(userId)
        .then(user =>{
            if (!user) throw new Error(`user with id ${userId} not found`)
            
            const filter={}

            if (query) {
                filter.text= new RegExp(query, 'i')
            }
           


            return Note.find(filter)
           
            .then(notes =>{
                notes.forEach(note=>{

                note.id = note._id.toString()

                delete note._id
                delete note.__v
                })
                return notes
            })
        })
}

module.exports = findNotes