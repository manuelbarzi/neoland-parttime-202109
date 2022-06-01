const {
    validators:
    { validateId, validateString },
    errors:
    { NotFoundError }
} = require('commons')
const { models: { User, Space } } = require('data')

function createSpace(adminId, title, description, price, features, type, deposit, size, access, image) {
    validateId(adminId, 'admin id')
    validateString(title, 'title')
    validateString(description, 'description')

    return User.findById(adminId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)

            return Space.create({ admin: adminId, title, description, price, features, type, deposit, size, access, image })
        })
        .then(space => { })
}

module.exports = createSpace