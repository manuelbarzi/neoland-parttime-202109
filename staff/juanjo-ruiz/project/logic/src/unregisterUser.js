const { models: { Company, User } } = require('data')
const { validators: { validateId, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')

function unregisterUser(companyId, userId, password) {
    validateId(companyId, 'company id')
    validateId(userId, 'user id')
    validatePassword(password)

    return Promise.all([Company.findById(companyId), User.findById(userId)])
        .then(([company, user]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            if (user.company.toString() !== companyId) throw new NotFoundError(`user with id ${userId} does not belong to company with id ${companyId}`)

            return bcrypt.compare(password, company.password)
        })
        .then(match => {
            if (!match) throw new AuthError('wrong credentials')

            return User.deleteOne({ _id: userId })
                .then(result => {
                    const { deletedCount } = result

                    if (deletedCount === 0)
                        throw new Error(`could not delete user with id ${userId}`)
                })
        })


}

module.exports = unregisterUser