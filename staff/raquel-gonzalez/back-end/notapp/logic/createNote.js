const { model: { Note } } = require ("data")

function createNote (userId, text, color, public = false){

    return user.findOne (userId)
    .then (user =>{
        if (!user) throw new Error (`user with id ${userId} not found`)

        return Note.create ({ user: userId, text, color, public })

        
    })
    .then (note => { } )

}

module.exports = createNote