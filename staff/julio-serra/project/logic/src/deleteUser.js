const { models: { User } } = require('data')
const { validators: { validateId, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')
const { match } = require('assert')

function deleteUser(id, password) {
    validateId(id, 'user id')
    validatePassword(password)

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            return bcrypt.compare(password, user.password)
        })
        .then(match => {
            if (!match) throw new AuthError('wrong credentials')

            return User.deleteOne({ _id: id })
        })
        .then(result => {
            const { deletedCount } = result

            if (deletedCount === 0)
                throw new Error(`could not delete user with id ${id}`)
        })

}

module.exports = deleteUser