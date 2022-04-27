const { models: { User, Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNote(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Promise.all([User.findById(userId).lean(), Note.findById(noteId).lean().populate('user')])
        .then(([user, note]) => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (!note) throw new Error(`note with id ${noteId} not found`)

            if (note.user._id.toString() !== userId & !note.public)
                throw new Error(`user with id ${userId} cannot retrieve non-public note with id ${noteId}`)

            note.id = note._id.toString()

            delete note._id
            delete note.__v

            note.userId = note.user._id.toString()
            note.userName = note.user.userName

            delete note.user

            return note
        })
}

module.exports = retrieveNote