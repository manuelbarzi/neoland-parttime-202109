const { models: { User, Note } } = require('../../data')
const { validators: { validateId }, errors: { NotFoundError, AuthError } } = require('../../commons')

module.exports = (id, noteId) => {
    validateId(id, 'user id')
    validateId(noteId, 'note id')

    return Promise.all([User.findById(id).lean(), Note.findById(noteId).lean().populate('user')])
        .then(([user, note]) => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if (note.user._id.toString() !== id && !note.public)
                throw new AuthError(`user with id ${id} cannot retrieve non-public note with id ${noteId}`)

            note.id = note._id.toString()

            delete note._id
            delete note.__v

            note.userId = note.user._id.toString()
            note.userName = note.user.name

            delete note.user

            return note

        })                
}

