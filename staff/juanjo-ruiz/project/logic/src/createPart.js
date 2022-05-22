const { models: { User, Vehicle, Part } } = require('data')
const { errors: { NotFoundError, AuthError }, validators: { validateString, validateId } } = require('commons')

function createPart(userId, vehicleId, description, image, state = '2') {
    validateId(userId, 'user id')
    validateId(vehicleId, 'vehicle id')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(state, 'state')

    return Promise.all([User.findById(userId), Vehicle.findById(vehicleId)])
        .then(([user, vehicle]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            if (user.company.toString() !== vehicle.user.toString()) throw new AuthError(`vehicle with id ${vehicleId} does not belong to user with id ${userId}`)

            const part = new Part({ user: userId, vehicle: vehicleId, description, image, state})

            vehicle.parts.push(part)

            return vehicle.save()
        })
        .then(vehicle => {})
}

module.exports = createPart