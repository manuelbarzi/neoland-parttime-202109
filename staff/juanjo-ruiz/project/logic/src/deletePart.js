const { models: { Company, Vehicle, Part } } = require('data')
const { validators: { validateId, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')

function deletePart(companyId, vehicleId, partId, password) {
    validateId(companyId, 'company id')
    validateId(vehicleId, 'vehicle id')
    validateId(partId, 'part id')
    validatePassword(password)

    return Promise.all([Company.findById(companyId), Vehicle.findById(vehicleId), Part.findById(partId)])
        .then(([company, vehicle]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
            if (!part) throw new NotFoundError(`part with id ${partId} not found`)

            if (part.vehicle.toString() !== vehicleId) throw new AuthError(`part with id ${partId} does not belong to vehicle with id ${vehicleId}`)
            if (vehicle.user.toString() !== companyId) throw new AuthError(`vehicle with id ${vehicleId} does not belong to admin with id ${companyId}`)

            return bcrypt.compare(password, company.password)
        })
        .then(match => {
            if (!match) throw new AuthError('wrong credentials')

            return Part.deleteOne({ _id: partId })
                .then(result => {
                    const { deletedCount } = result

                    if (deletedCount === 0)
                        throw new Error(`could not delete user with id ${vehicleId}`)
                })
        })


}

module.exports = deletePart