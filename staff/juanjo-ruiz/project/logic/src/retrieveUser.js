const { models: { Company, User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveUser(companyId, userId) {
    validateId(companyId, 'company id')
    validateId(userId, 'user id')

    return Promise.all([Company.findById(companyId).lean(), User.findById(userId).lean()])
        .then(([company, user]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)    
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            if (user.company.toString() !== company._id.toString()) throw new AuthError(`user with id ${userId} does not belong to admin with id ${companyId}`)

            user.id = user._id.toString()
            user.newDate = user.date.toLocaleDateString()

            delete user._id
            delete user.__v
            delete user.password
            delete user.date

            return user
        })
}

module.exports = retrieveUser