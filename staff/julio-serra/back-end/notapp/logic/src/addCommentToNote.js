const { models: { User, Note, Comment } } = require('../../data')
const { validators: { validateId, validateString} } = require('../../commons')

function addCommentToNote(id, noteId, text) {
    validateId(id, 'user id')
    validateId(noteId, 'note id')
    validateString(text)

    return Promise.all([User.findById(id), Note.findById(noteId)])
        .then(([user, note]) => {
            if (!user) throw new Error(`user with id ${id} not found`)
            if (!note) throw new Error(`note with ${noteId} not found`)

            if (!note.public && note.user.toString() !== id)
                throw new Error(`user with id ${id} cannot comment non-public note with id ${noteId}`)

            const comment = new Comment({ user: id, text })

            note.comments.push(comment)

            return note.save()
        })
        .then(note => { })
}

module.exports = addCommentToNote

