const { models: { Company, Vehicle } } = require('data')
const { errors: { DuplicityError, NotFoundError }, validators: { validateString, validateId, validateBoolean } } = require('commons')

function createVehicle(companyId, lisense, brand, model, frame, active = true) {
    validateId(companyId, 'company id')
    validateString(lisense, 'lisense')
    validateString(brand, 'brand')
    validateString(model, 'model')
    validateString(frame, 'frame')
    validateBoolean(active, 'active')

    return Company.findById(companyId)
        .then(company => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)

            return Vehicle.create({ user: companyId, lisense, brand, model, frame, active })
                .then(vehicle => { })
                .catch(error => {
                    if (error.message.includes('duplicate'))
                        throw new DuplicityError('vehicle already exist')

                    throw error
                })
        })
}

module.exports = createVehicle