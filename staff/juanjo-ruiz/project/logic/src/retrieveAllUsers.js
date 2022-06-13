const { models: { User, Company } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveAllUsers(companyId) {
    validateId(companyId, 'user id')

    return Company.findById(companyId)
        .then(company => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)

            return User.find({ active: true }).lean().sort('-date')
        })
        .then(users => {
            users.forEach(user => {

                user.id = user._id.toString()

                delete user._id
                delete user.__v
            })
            return users
        })
}

module.exports = retrieveAllUsers