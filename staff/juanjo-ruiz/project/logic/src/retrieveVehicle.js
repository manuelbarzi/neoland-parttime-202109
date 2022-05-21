const { models: { Vehicle, User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError, AuthError } } = require('commons')

function retrieveVehicle(userId, vehicleId) {
    validateId(userId, 'user id')
    validateId(vehicleId, 'vehicle id')

    return Promise.all([User.findById(userId).lean(), Vehicle.findById(vehicleId).lean()])
        .then(([user, vehicle]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            if (vehicle.user.toString() !== user.company.toString()) throw new AuthError(`user with id ${userId} does not belong to vehicle with id ${vehicleId}`)


            vehicle.id = vehicle._id.toString()

            delete vehicle._id
            delete vehicle.__v

            return vehicle
        })
}

module.exports = retrieveVehicle