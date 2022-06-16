const { models: { User, user } } = require('data')
const bcrypt = require('bcryptjs')
const { errors: { DuplicityError, NotFoundError, AuthError }, validators: { validateString, validateEmail, validatePassword, validateId } } = require('commons')

function createUser(userId, name, email, password, role = 'driver') {
    validateId(userId, 'user id')
    validateString(name, 'name')
    validateEmail(email)
    validatePassword(password)
    validateString(role, 'role')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            if (user.role !== 'owner' && user.role !== 'admin')
                throw new AuthError(`user with id ${userId} not authorized for this operation`)

            if (role === 'owner' || role === 'admin' && user.role !== 'owner')
                throw new AuthError(`user with id ${userId} not authorized for this operation`)

            if (role === 'driver' && user.role === 'driver')
                throw new AuthError(`user with id ${userId} not authorized for this operation`)

            return bcrypt.hash(password, 10)
                .then(hash => User.create({ company: user.company, user: user.id, name, email, password: hash, role }))
                .then(user => { })
                .catch(error => {
                    if (error.message.includes('duplicate'))
                        throw new DuplicityError('user already exist')

                    throw error
                })
        })
}

module.exports = createUser