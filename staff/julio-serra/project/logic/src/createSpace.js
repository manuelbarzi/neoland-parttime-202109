const {
    validators:
    { validateId, validateString },
    errors:
    { NotFoundError }
} = require('commons')
const { models: { User, Space } } = require('data')

function createSpace(adminId, text) {
    validateId(adminId, 'admin id')
    validateString(text, 'text')

    return User.findById(adminId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)

            return Space.create({ admin: adminId, text })
        })
        .then(space => { })
}

module.exports = createSpace