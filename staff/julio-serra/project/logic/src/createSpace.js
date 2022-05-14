const {
    validators:
    { validateId, validateString },
} = require('commons')
const { models: { User, Space } } = require('data')

function createSpace(adminId, text) {
    validateId(adminId, 'admin id')
    validateString(text, 'text')

    return User.findById(adminId)
        .then(user => {
            if (!user) throw new Error(`user with id ${adminId} not found`)

            return Space.create({ admin: adminId, text })
        })
        .then(space => { })
}

module.exports = createSpace