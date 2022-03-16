const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNotes(userId, ownerId) {
    validateId(userId, 'user id')
    validateId(ownerId, 'owner id')

    if (userId === ownerId) {
        return Note.find({ user: userId }).lean()
            .then(notes => {
                notes.forEach(note => {
                    note.id = note._id.toString()

                    delete note._id
                    delete note.__v
                })

                return notes
            })
    } else return Note.find({ user: ownerId, public: true }).lean()
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