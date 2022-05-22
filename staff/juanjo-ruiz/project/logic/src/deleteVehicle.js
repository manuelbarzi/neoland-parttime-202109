const { models: { Company, Vehicle } } = require('data')
const { validators: { validateId, validatePassword }, errors: { NotFoundError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')

function deleteVehicle(companyId, vehicleId, password) {
    validateId(companyId, 'company id')
    validateId(vehicleId, 'vehicle id')
    validatePassword(password)

    return Promise.all([Company.findById(companyId), Vehicle.findById(vehicleId)])
        .then(([company, vehicle]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            if (vehicle.user.toString() !== companyId) throw new NotFoundError(`vehicle with id ${vehicleId} does not belong to admin with id ${companyId}`)

            return bcrypt.compare(password, company.password)
        })
        .then(match => {
            if (!match) throw new AuthError('wrong credentials')

            return Vehicle.deleteOne({ _id: vehicleId })
                .then(result => {
                    const { deletedCount } = result

                    if (deletedCount === 0)
                        throw new Error(`could not delete user with id ${vehicleId}`)
                })
        })


}

module.exports = deleteVehicle