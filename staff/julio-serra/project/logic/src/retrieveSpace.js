const { models: { Space } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveSpace(spaceId) {
    validateId(spaceId, 'space id')

    return Space.findById(spaceId).lean()
        .then(space => {
            if (!space) throw new NotFoundError(`space with id ${spaceId} not found`)

            space.id = space._id.toString()

            delete space._id
            delete space.__v

            return space
        })
}

module.exports = retrieveSpace