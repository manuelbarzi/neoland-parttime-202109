const { models: { Company, Vehicle } } = require('data')
const { validators: { validateId, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')

function deletePart(companyId, vehicleId, partId, password) {
    validateId(companyId, 'company id')
    validateId(vehicleId, 'vehicle id')
    validateId(partId, 'part id')
    validatePassword(password)

    return Promise.all([Company.findById(companyId), Vehicle.findById(vehicleId)])
        .then(([company, vehicle]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            if (vehicle.user.toString() !== companyId) throw new AuthError(`vehicle with id ${vehicleId} does not belong to admin with id ${companyId}`)

            return bcrypt.compare(password, company.password)

                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')

                    const { parts } = vehicle

                    const partIndex = parts.findIndex(part => part.id === partId)

                    if (partIndex < 0) throw new NotFoundError(`part with id ${partId} not found`)

                    parts.splice(partIndex, 1)

                    return vehicle.save()
                })
                .then(() => { })
        })
}

module.exports = deletePart