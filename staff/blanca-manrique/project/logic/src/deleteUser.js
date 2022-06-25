const { models: { User }} = require('data')
const { 
    validators: { validateId, validatePassword }, 
    errors: { NotFoundError, AuthError, ConflictError }} 
= require('commons')
const bcrypt = require('bcryptjs')

function deleteUser(userId, password) {
    validateId(userId, 'user id')
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            //if (user.password !== password) throw new AuthError('wrong credentials')
            return bcrypt.compare(password, user.password) //compare=true or false?????
        })
        .then(match => {
            if (!match) throw new AuthError('wrong credentials')

            return User.deleteOne({ _id: userId })
        })
        .then(result => {
            const { deletedCount } = result

            if (deletedCount === 0)
                throw new ConflictError(`could not delete user with id ${userId}`)
        })
}

module.exports = deleteUser