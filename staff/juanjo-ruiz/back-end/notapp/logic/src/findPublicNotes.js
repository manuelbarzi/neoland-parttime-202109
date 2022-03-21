const { models: { User, Note } } = require('data')
const { validators: { validateId } } = require('commons')

function findPublicNotes(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('please, sign up')

            return Note.find({ public: true })
        })
        .then(notes => {
            notes.map(note => {
                const doc = note._doc

                doc.id = doc._id.toString()

                delete doc._id
                delete doc.__v
                
                return doc
            })
        })
}

module.exports = findPublicNotes