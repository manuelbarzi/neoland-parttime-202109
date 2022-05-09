const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function deleteUser(id, password) {
    validateId(id)
    validatePassword(password)

    return User.deleteOne({ _id: id, password })
        .then(result => {
            const { deletedCount } = result
            if(deletedCount === 0)
            throw new Error(`User with id ${id} not found or wrong credentials`)
        })
}

module.exports = deleteUser