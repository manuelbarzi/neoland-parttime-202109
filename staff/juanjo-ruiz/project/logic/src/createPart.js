const { models: { User, Vehicle, Part } } = require('data')
const { errors: { NotFoundError }, validators: { validateString, validateId } } = require('commons')

function createPart(userId, vehicleId, description, image) {
    validateId(userId, 'user id')
    validateId(vehicleId, 'vehicle id')
    validateString(description, 'description')
    validateString(image, 'image')

    return Promise.all([User.findById(userId), Vehicle.findById(vehicleId)])
        .then(([user, vehicle]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            const part = new Part({ company: user.company, user: user.id, vehicle: vehicle.id, description, image })

            vehicle.parts.push(part)

            return vehicle.save()
        })
        .then(vehicle => { })
}

module.exports = createPart