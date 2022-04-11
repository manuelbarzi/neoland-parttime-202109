const { models: { User, Note, Comment }} = require('data')

function addCommentToNote(userId, noteId, text) {
    // TODO validate input arguments
    
    return Promise.all([User.findById(userId), Note.findById(noteId)])
        .then(([user, note]) => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (!note) throw new Error(`note with id ${noteId} not found`)

            if (!note.public && note.user.toString() !== userId)
                throw new Error(`user with id ${userId} cannot comment non-public note with id ${noteId}`)

            const comment = new Comment({ user: userId, text })

            note.comments.push(comment)

            return note.save()
        })
        .then(note => {})
}

module.exports = addCommentToNote