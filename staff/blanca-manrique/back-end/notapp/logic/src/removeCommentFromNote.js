const { models: { User, Note, Comment } } = require('data')
const { validators: { validateId } } = require('commons')

function removeCommentFromNote(userId, noteId, commentId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    validateId(commentId, 'comment id')

    return Promise.all([User.findById(userId), Note.findById(noteId), Comment.findById(commentId)])
        .then(([user, note, comment])=>{
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (!note) throw new Error(`note with id ${noteId} not found`)
            if (!comment) throw new Error(`comment with id ${commentId} not found`)

            //de todos los comentarios, borra el que tenga el commentId
            //salvamos la nota, ya sin el coment
        })
}
module.exports = removeCommentFromNote 