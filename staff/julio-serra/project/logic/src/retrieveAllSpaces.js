const { models: { Space } } = require('data')
const { errors: { NotFoundError } } = require('commons')

function retrieveAllSpaces() {

    return Space.find().lean().sort('-date')
        .then((spaces) => {

            if (spaces.length === 0) throw new NotFoundError('Spaces not found')

            return spaces.map(space => {
                space.id = space._id.toString()

                delete space._id
                delete space.__v

                return space
            })
        })
}

module.exports = retrieveAllSpaces