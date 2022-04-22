const { models: { Note, User } } = require('data')



function createNote (userId, text, color, public = false){

  debugger
return User.findById(userId)
    .then(user => {
        if(!user) throw new Error (`User with id ${userId} not found`)
    
        return Note.create({ user: userId, text, color, public })
    })
    .then(note => { })

}

module.exports = createNote