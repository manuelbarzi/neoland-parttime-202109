const { models: { User, Note } } = require('../../data')
const { validators: { validateId } } = require('../../commons')

function retrievePublicNotesFromUser(userId, ownerId) {
    validateId(userId, 'user id')
    validateId(ownerId, 'owner id')

    return Promise.all([User.findById(userId), User.findById(ownerId)])
        .then(([userId, ownerId]) => {
            if (!userId) throw new Error(`user with id ${userId} not found`)
            if (!ownerId) throw new Error(`user with id ${ownerId} not found`)

            return Note.find({ user: ownerId, public: true }).lean()
        })
        .then(notes => {
            notes.forEach(note  => {
                note.id = note._id.toString()
                
                delete note._id
                delete note.__v
            })
            return notes
        })
}

module.exports = retrievePublicNotesFromUser