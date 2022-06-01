const { models: { User, Company } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveAllUsers(companyId) {
    validateId(companyId, 'user id')

    return Company.findById(companyId)
        .then(company => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)

            return User.find({ role: 'driver' }).lean().sort('-date')
        })
        .then(drivers => {
            drivers.forEach(driver => {

                driver.id = driver._id.toString()

                delete driver._id
                delete driver.__v
            })
            return drivers
        })
}

module.exports = retrieveAllUsers