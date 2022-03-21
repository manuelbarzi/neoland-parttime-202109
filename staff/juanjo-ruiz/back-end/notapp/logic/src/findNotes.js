const { models: { User, Note } } = require('data')
const { validators: { } } = require('commons')
const { validateId, validateColor } = require('commons/src/validators')

function findNotes(userId, query, color, date) {
    validateId(userId, 'user id')
    validateQuery(query)
    validateColor(color)
    validateDate(date)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const filter = {}

            if (query)
                filter.text = new RegExp(query, 'i')

            if (color)
                filter.color = new RegExp(color, 'i')

            if (date)
                filter.date = new RegExp(date, 'i')

            return Note.find(filter)
        })
        .then(notes => {
            notes.forEach(note => {
                note.id = note._id.toString()

                delete note._id
                delete note.__v
            })
            return notes
        })

}

module.exports = findNotes