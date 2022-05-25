const { models: { User, Vehicle, Part } } = require('data')
const { validators: { validateId, validateString }, errors: { NotFoundError, AuthError } } = require('commons')

function updatePartDriver(userId, vehicleId, partId, description, image) {
    validateId(userId, 'user id')
    validateId(vehicleId, 'vehicle id')
    validateId(partId, 'part id')
    validateString(description, 'description')
    validateString(image, 'image')

    return Promise.all([User.findById(userId), Vehicle.findById(vehicleId)])
        .then(([user, vehicle]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            const { parts } = vehicle

            const part = parts.find(item => item._id.toString() === partId)

            part.description.push(description)
            part.image.push(image)

            return vehicle.save()
        })
        .then(() => { })
}

module.exports = updatePartDriver
