const { models: { User, Note } } = require('data')
const { 
    validators: { validateId, validateString, validateBoolean },
    errors: { NotFoundError }
} = require('commons')

function createNote(userId, text, color, public = false) {
    validateId(userId, 'user id')
    validateString(text, 'text')
    validateString(color, 'color')
    validateBoolean(public, 'public')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Note.create({ user: userId, text, color, public })
        })
        .then(note => { })
}

module.exports = createNote