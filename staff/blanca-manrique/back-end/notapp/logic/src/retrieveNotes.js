const { models: { User, Note } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError }
} = require('commons')

function retrieveNotes(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Note.find({ user: userId }).lean().populate('user').sort('-date')
        })
        .then(notes => {
            //limpiamos las notas (sanitize)
            notes.forEach(note => {
                note.id = note._id.toString()

                delete note._id
                delete note.__v

                //propiedades del usuario que ha creado la nota
                note.userId = note.user._id.toString()
                note.userName = note.user.name

                delete note.user


                //comentarios de la nota
                const { comments } = note

                if (comments) {
                    comments.forEach(comment => {
                        comment.id = comment._id.toString()

                        delete comment._id
                        delete comment.__v
                    })
                }
            })

            return notes
        })
}

module.exports = retrieveNotes