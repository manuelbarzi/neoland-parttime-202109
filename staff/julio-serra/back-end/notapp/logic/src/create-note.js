const { models: { Note } } = require('../../data/')

function createNote(user, data, color, public, text) {
    return Note.create({ user, data, color, public, text })
        .then(note => { })
}

module.exports = createNote