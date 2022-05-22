const { models: { Company, User } } = require('data')
const { validators: { validateId, validateString, validateEmail }, errors: { NotFoundError, AuthError } } = require('commons')

function updateUser(companyId, userId, name, email) {
    validateId(companyId, 'company id')
    validateId(userId, 'user id')
    validateString(name, 'name')
    validateEmail(email)

    return Promise.all([Company.findById(companyId), User.findById(userId)])
        .then(([company, user]) => {
            if (!company) throw new NotFoundError(`user with id ${companyId} not found`)
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            if (user.company.toString() !== companyId) throw new AuthError(`user with id ${userId} does not belong to admin with id ${companyId}`)

            return User.updateOne({ _id: userId }, { name, email })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new NotFoundError(`user with id ${userId} not found`)
                })
        })
}

module.exports = updateUser
