const { models: { User, Note } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError, AuthError }
} = require('commons')

function retrieveNote(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Promise.all([User.findById(userId).lean(), Note.findById(noteId).lean().populate('user')])
        .then(([user, note]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            //compruebo si la nota es mía: siempre la voy a poder ver
            //PERO si la nota NO ES MÍA, tiene que ser pública. Si no es mía y no es pública: error
            if (note.user._id.toString() !== userId && !note.public)
                throw new AuthError(`user with id ${userId} cannot retrieve non-public note with id ${noteId}`)

            //Limpiamos la nota antes de devolverla
            note.id = note._id.toString()

            delete note._id
            delete note.__v

            //Nos traemos todos los datos del usuario gracias al .populate()
            //queremos que la nota tenga 2 nuevas propiedades, así vamos a poder eliminar note.user entero
            note.userId = note.user._id.toString()
            note.userName = note.user.name

            delete note.user

            return note
        })
}
module.exports = retrieveNote