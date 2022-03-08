const { models: { Note }} = require('data')

function createNote(user, color, text, public) {

    return Note.create({ user, color, text, public})
        .then(note => { })
}

module.exports = createNote