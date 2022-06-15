const { models: { User, Vehicle } } = require('data')
const { errors: { DuplicityError, NotFoundError }, validators: { validateString, validateId, validateBoolean } } = require('commons')

function createVehicle(adminId, lisense, brand, model, frame, active = true) {
    validateId(adminId, 'company id')
    validateString(lisense, 'lisense')
    validateString(brand, 'brand')
    validateString(model, 'model')
    validateString(frame, 'frame')
    validateBoolean(active, 'active')

    return User.findById(adminId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)

            if (user.role !== 'owner')
                throw new AuthError(`user with id ${adminId} not authorized for this operation`)


            return Vehicle.create({ user: adminId, lisense, brand, model, frame, active })
                .then(vehicle => { })
                .catch(error => {
                    if (error.message.includes('duplicate'))
                        throw new DuplicityError('vehicle already exist')

                    throw error
                })
        })
}

module.exports = createVehicle