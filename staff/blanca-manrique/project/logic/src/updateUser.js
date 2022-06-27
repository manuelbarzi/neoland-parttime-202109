const { models: { User } } = require('data')
const {
    validators: { validateId, validateUsername, validateEmail, validatePassword },
    errors: { NotFoundError, DuplicityError }
} = require('commons')
const bcrypt = require('bcryptjs')

function updateUser(userId, username, email, password) {
    validateId(userId, 'user id')
    validateUsername(username)
    validateEmail(email)
    validatePassword(password)

    return bcrypt.hash(password, 10)
        .then(hash => User.updateOne({ _id: userId }, { username, email, password: hash }))
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} not found`)
        })
        .catch(error => {
            if (error.message.includes('dup key: { ')) //si el error contiene "dup key: { username" lanzo este error custom
                throw new DuplicityError('user with same credentials already exists')

            // else if (error.message.includes('dup key: { email')) //si el error contiene "dup key: { email" lanzo este error custom
            //     throw new DuplicityError('email already exists')

            throw error //si el error NO contiene "duplicate", lanzo el error propio de Mongodb
        })

}
module.exports = updateUser