const { models: { Note, User } } = require('../../data/src')
const { errors: { FormatError, AuthError } } = require('../../commons/src')

const { validators: { validateId } } = require('../../commons/src')
const { note } = require('../../data/src/schemas')

module.exports = (id, noteId) => {
    validateId(id, 'user id')
    validateId(noteId, 'note id')

    return Promise.all([User.findById(id), Note.findById(noteId)])
        .then(([user, note]) => {
            if (!user) throw new FormatError(`user with id ${id} not found`)
            if (!note) throw new FormatError(`note with id ${noteId} note found`)

            if (note.user.toString() !== id) throw new AuthError(`note with id ${noteId} does not belong to user with id ${id}`)

            return Note.deleteOne({ _id: noteId })
        })

        .then(() => {})
    // return Note.deleteOne({ user: id, _id: noteId })

    //     .then(result => {
    //         const { matchedCount } = result
    //         if (matchedCount === 0) throw new Error(`note with id ${noteId} and user ${id} not found`)
    //     })
}

