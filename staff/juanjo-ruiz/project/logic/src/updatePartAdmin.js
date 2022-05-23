const { models: { Company, Vehicle, Part } } = require('data')
const { validators: { validateId, validateString }, errors: { NotFoundError, AuthError } } = require('commons')

function updatePartAdmin(companyId, vehicleId, partId, description, image, state) {
    validateId(companyId, 'company id')
    validateId(vehicleId, 'vehicle id')
    validateId(partId, 'part id')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(state, 'state')

    return Promise.all([Company.findById(userId), Vehicle.findById(vehicleId), Part.findById(partId)])
        .then(([companyId, vehicle, part]) => {
            if (!companyId) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
            if (!part) throw new NotFoundError(`part with id ${partId} not found`)

            if (vehicle._id.toString() !== part.vehicle.toString()) throw new AuthError(`part with id ${partId} does not belong to vehicle with id ${vehicleId}`)
            if (vehicle.user.toString() !== companyId) throw new AuthError(`vehicle with id ${vehicleId} does not belong to admin with id ${companyId}`)

            return Vehicle.updateOne({ _id: partId }, { description, image, state })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
                })
        })
}

module.exports = updatePartAdmin
