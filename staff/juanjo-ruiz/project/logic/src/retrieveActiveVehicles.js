const { models: { Vehicle, User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveActiveVehicles(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Vehicle.find({ active: true }).lean().sort('-date')
        })
        .then(vehicles => {
            vehicles.forEach(vehicle => {

                vehicle.id = vehicle._id.toString()
                vehicle.userId = vehicle.user._id.toString()
    
                delete vehicle._id
                delete vehicle.user._id
                delete vehicle.__v
            })

            return vehicles
        })
}

module.exports = retrieveActiveVehicles