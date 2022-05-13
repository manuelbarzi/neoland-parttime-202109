const { models: { User, Space } } = require('data')
const { validators: { validateId }, errors: {NotFoundError, AuthError} } = require('commons')

function retrieveSpace(adminId, spaceId) {
    validateId(adminId, 'admin id')
    validateId(spaceId, 'space id')

    return Promise.all([User.findById(adminId).lean(), Space.findById(spaceId).lean()])
    .then(([user, space]) => {
        if(!user) throw new NotFoundError(`user with id ${adminId} not found`)
        if(!space) throw new NotFoundError(`space with id ${spaceId} not found`)
        
        space.id = space._id.toString()

        delete space._id
        delete space.__v

        return space

    })
}

module.exports = retrieveSpace