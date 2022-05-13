const { models: { User, Space } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function deleteSpace(adminId, spaceId) {
    validateId(adminId, 'admin id')
    validateId(spaceId, 'space id')

    return Promise.all([User.findById(adminId), Space.findById(spaceId)])
        .then(([user, space]) => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)
            if (!space) throw new NotFoundError(`space with id ${spaceId} not found`)

            return Space.deleteOne({ _id: spaceId })
        })
        .then(() => {})
}

module.exports = deleteSpace