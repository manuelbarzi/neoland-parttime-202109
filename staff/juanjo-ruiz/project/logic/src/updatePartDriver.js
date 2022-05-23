const { models: { User, Vehicle, Part } } = require('data')
const { validators: { validateId, validateString }, errors: { NotFoundError, AuthError } } = require('commons')

function updatePartDriver(userId, vehicleId, partId, description, image) {
    validateId(userId, 'user id')
    validateId(vehicleId, 'vehicle id')
    validateId(partId, 'part id')
    validateString(description, 'description')
    validateString(image, 'image')

    return Promise.all([User.findById(userId), Vehicle.findById(vehicleId), Part.findById(partId)])
        .then(([user, vehicle, part]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
            if (!part) throw new NotFoundError(`part with id ${partId} not found`)

            if (vehicle._id.toString() !== part.vehicle.toString()) throw new AuthError(`part with id ${partId} does not belong to vehicle with id ${vehicleId}`)

            return Vehicle.updateOne({ _id: partId }, { description, image })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
                })
        })
}

module.exports = updatePartDriver
