const { models: { User, Note } } = require('../../data')
const {
    validators: { validateId, validateString, validateBoolean },
    errors: { NotFoundError, AuthError }
} = require('../../commons')

function updateNote(id, noteId, color, _public, text) {
    validateId(id, 'user id')
    validateId(noteId, 'note id')
    validateString(color, 'color')
    validateString(text, 'text')
    validateBoolean(_public, 'public')

//     return Note.updateOne({ user: id, _id: noteId }, { color, public: _public, text })
//         .then(result => {
//             const { matchedCount } = result

//             if (matchedCount === 0) throw new Error(`note with id ${id} and user id ${id} not found`)
//         })
// }

    return Promise.all([User.findById(id), Note.findById(noteId)])
        .then(([user, note]) => {
            if(!user) throw new NotFoundError(`user with id ${id} note found`)
            if(!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if (note.user.toString() !== id) throw new AuthError(`note with id ${noteId} doesnt belong to user with id ${id}`)

            note.text = text
            note.color = color
            note.public = _public

            return note.save()
        })
        .then(note => {})
    }

module.exports = updateNote