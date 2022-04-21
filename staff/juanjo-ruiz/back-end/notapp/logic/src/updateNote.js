const { models: { User, Note } } = require('data')
const { validators: { validateId, validateString, validateBoolean } } = require('commons')
const { validateBoolean } = require('commons/src/validators')

function updateNote(userId, noteId, text, color, _public) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    validateString(text, 'text')
    validateStrign(color, 'color')
    validateBoolean(_public, 'public')

    /* return Note.updateOne({ user: userId, _id: noteId }, { text: text, color: color, public: public })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        }) */

    return Promise.all([User.findById(userId), Note.findById(noteId)])
        .then(([user, note]) => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (!note) throw new Error(`note with id ${noteId} not found`)

            if (note.user.toString() !== userId) throw new Error(`note with id ${noteId} does not belong to user with id ${userId}`)

            note.text = text
            note.color = color
            note.public = _public

            return note.save()
        })
        .then(note => { })
}

module.exports = updateNote