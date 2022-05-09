const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function deleteUser(id, password) {
    validateId(id)
    validatePassword(password)

    return User.findById(id)
        .then(user => {
            if (!user) throw new Error(`User with ${id} not found`)

            if (user.password !== password) throw new Error('wrong credentials')

            return User.deleteOne({ _id: id })

            .then(result => {
                if(result.deletedCount === 0)
                throw new Error(`cannot delete user with id $`)
            })
        })
}

module.exports = deleteUser