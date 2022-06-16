const { models: { User, Vehicle, Part } } = require('data')
const { validators: { validateId, validateString }, errors: { NotFoundError, AuthError } } = require('commons')

function updatePartAdmin(adminId, vehicleId, partId, description, image, state) {
    validateId(adminId, 'user id')
    validateId(vehicleId, 'vehicle id')
    validateId(partId, 'part id')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(state, 'state')

    return Promise.all([User.findById(adminId), Vehicle.findById(vehicleId)])
        .then(([user, vehicle]) => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
            
            if ( user.role !== 'owner' && user.role !== 'admin')
                throw new AuthError(`user with id ${adminId} not authorized for this operation`)

            return Vehicle.updateOne({ _id: partId }, { description, image, state })
                .then(result => {
                    const { matchedCount } = result

                    if (matchedCount === 0)
                        throw new NotFoundError(`vehicle with id ${vehicleId} not found`)
                })
        })
}

module.exports = updatePartAdmin
