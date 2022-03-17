const { models: { User, Note } } = require('../../data')
const { validators: { validateId } } = require('../../commons')

function findNotes(id, noteId) {
    validateId(id)

    return User.findById(noteId)

    .then(note => {
        const doc = note._doc
        doc.id = doc._id.toString()

        delete doc._id
        delete doc.__v
        delete doc.password

        return doc
    })
}

module.exports = findNotes