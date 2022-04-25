const { models: { User, Note }} = require('data')
const { 
    validators: { validateId, validateText, validateBoolean },
    errors: {NotFoundError, AuthError}
} = require('commons')

function updateNote(userId, noteId, text, color, _public) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    validateText(text, 'text')
    validateText(color, 'color')
    validateBoolean(_public, 'public')

    return User.findById(userId) 
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Note.findById(noteId)
        })
        .then(note =>{
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if (note.user.toString() !== userId) throw new AuthError(`note with id ${noteId} does not correspond to user with id ${userId}`)

            // return Note.updateOne({ user: userId, _id: noteId }, { text, color, _public })

            //Como ya tengo la nota, actualizo sus campos:
            note.text = text
            note.color = color
            note.public = _public      
            
            return note.save()
        })
        .then(result => {})
}
module.exports = updateNote