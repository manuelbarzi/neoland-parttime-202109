const { models: User, Note, Comment } = require('data')

function addCommentToNote (userId, noteId, text) {
    //necesitas un usuario, una nota y un texto, con el promise esperas a que te devuelva todas las promesas a la vez.
    return Promise.all ([User.findById(userId), Note.findById(noteId)])
    .then (([user, note]) => {
        // pasas el user note y lanzas el error en caso de encontrarlo
        if (!user) throw new Error (`user with id ${userId} not found`)
        if (!note) throw new Error (`note with id ${noteId} not found`)

        //TODO
        if (!note.public && note.user.toString () !== userId)
            throw new Error (`user with id ${userId} cannot comment non-public note with id ${noteId}`)

        const comment = new Comment ({
            text,
            user: userId,
            note: noteId
        })

        return comment.save()
    }
    
    )}

    module.exports = addCommentToNote