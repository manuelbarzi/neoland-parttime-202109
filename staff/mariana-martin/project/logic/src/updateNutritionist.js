const { models: { User } } = require('data')
const { validators: { validateEmail, validatePassword, validateId },
    errors: { AuthError } } = require('commons')
const bcrypt = require('bcryptjs')


function updateNutritionist(nutritionistId, name, email, password) {
    validateId(nutritionistId, 'nutritionist id')
    validateEmail(email)
    validatePassword(password)


    return bcrypt.hash(password, 10)  //filtro(_id:)
    .then(hash => User.updateOne({ _id: nutritionistId }, { name, email, password: hash }))

    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`nutritionist with id ${nutritionistId} not found`)
    })
}
            //el matchedCount es el resultado del updateOne, nos sirve para saber si el criterio _id: , ha encontrado algo, si no encuentra algo será 0, y si si 1

module.exports = updateNutritionist