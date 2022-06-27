const {models:{ User}} = require('data')
const {errors: { NotFoundError}, validators: { validateId}} = require('commons')

function retrieveNutritionist(nutritionistId) {
    validateId(nutritionistId, 'nutritionist id')

    return User.findById(nutritionistId).lean()
        .then(nutritionist => {
            if(!nutritionist) throw new NotFoundError(`nutritionist with id ${nutritionistId} not found` )

            nutritionist.id = nutritionist._id.toString()
            delete nutritionist._id
            delete nutritionist.__v

            delete nutritionist.password

            return nutritionist
        })
}

module.exports = retrieveNutritionist