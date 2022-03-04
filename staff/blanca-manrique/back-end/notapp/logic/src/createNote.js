const { models: { Note } } = require('data')

function createNote (user, date, color, public, text){


    return Note.create({user, date, color, public, text})
    .then(note => { })

}

module.exports = createNote