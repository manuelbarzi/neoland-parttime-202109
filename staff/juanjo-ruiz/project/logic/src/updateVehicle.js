const { models: { Company, Vehicle } } = require('data')
const { validators: { validateId, validateString }, errors: { NotFoundError, AuthError } } = require('commons')

function updateVehicle(companyId, vehicleId, lisense, brand, model, frame) {
    validateId(companyId, 'company id')
    validateId(vehicleId, 'vehicle id')
    validateString(lisense, 'lisense')
    validateString(brand, 'brand')
    validateString(model, 'model')
    validateString(frame, 'frame')

    return Promise.all([Company.findById(companyId), Vehicle.findById(vehicleId)])
        .then(([company, vehicle]) => {
            if (!company) throw new NotFoundError(`user with id ${companyId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            if (vehicle.user.toString() !== companyId) throw new AuthError(`vehicle with id ${vehicleId} does not belong to user with id ${companyId}`)

            return Vehicle.updateOne({ _id: vehicleId }, { lisense, brand, model, frame })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
                })
        })
}

module.exports = updateVehicle
