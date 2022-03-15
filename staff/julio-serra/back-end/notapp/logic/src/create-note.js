const { models: { Note } } = require('../../data/')

function createNote(user, color, public, text) {
    return Note.create({ user, color, public, text })
        .then(note => { })
}

module.exports = createNote