const { models: { User, Note } } = require('../../data/')

function createNote(id, text, color, public = false) {

    return User.findById(id)
        .then(user => {
            if (!user) throw new Error(`user with id ${id} not found`)

            return Note.create({ user: id, text, color, public })
        })
        .then(note => { })
    }

module.exports = createNote