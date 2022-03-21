const { models: { User, Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNotes(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Note.find({ user: userId }).lean()
        })
        .then(notes => {
            notes.forEach(note => {
                note.id = note._id.toString()

                delete note._id
                delete note.__v
            })

            return notes
        })
}

module.exports = retrieveNotes