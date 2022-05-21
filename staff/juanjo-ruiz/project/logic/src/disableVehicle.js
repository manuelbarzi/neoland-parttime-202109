const { models: { Company, Vehicle } } = require('data')
const { validators: { validateId, validateBoolean, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')

function disableVehicle(companyId, vehicleId, password, active = false) {
    validateId(companyId, 'company id')
    validateId(vehicleId, 'vehicle id')
    validatePassword(password)
    validateBoolean(active)

    return Promise.all([Company.findById(companyId), Vehicle.findById(vehicleId)])
        .then(([company, vehicle]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            if (vehicle.user.toString() !== companyId) throw new NotFoundError(`user with id ${companyId} does not belong to vehicle with id ${vehicleId}`)

            return bcrypt.compare(password, company.password)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')

                    return Vehicle.updateOne({ _id: vehicleId }, { active })
                })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
                })
        })
}

module.exports = disableVehicle
