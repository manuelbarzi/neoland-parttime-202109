const { models: { Company, User } } = require('data')
const { validators: { validateId, validateBoolean, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')

function disableUser(companyId, userId, password, active = 'false') {
    validateId(companyId, 'company id')
    validateId(userId, 'user id')
    validatePassword(password)
    validateBoolean(active)

    return Promise.all([Company.findById(companyId), User.findById(userId)])
        .then(([company, user]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            if (user.company.toString() !== companyId) throw new NotFoundError(`user with id ${userId} does not belong to company with id ${companyId}`)

            return bcrypt.compare(password, company.password)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')

                    return User.updateOne({ _id: userId }, { active })
                })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new NotFoundError(`user with id ${userId} not found`)
                })
        })
}

module.exports = disableUser
