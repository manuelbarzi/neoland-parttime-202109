const { models: { User } } = require('data')
const { validators: { validateName, validateEmail, validatePassword,
    validateId, validateNumber, validateString, validateArray }, errors: { NotFoundError, DuplicityError, AuthError } } = require('commons')
const bcrypt = require('bcryptjs')




//un nutritionist sólo puede dar de alta, debo de enviar token
                        //importante orden de los parametros al enviar argumentos
function createPatient(nutritionistId, name, email, password, age, weight, height, measures, goal) {
    validateId(nutritionistId, 'nutritionist id')
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    validateNumber(age, 'age')
    validateNumber(weight, 'weight')
    validateNumber(height, 'height')
    // validateArray(measures, 'measures')
    // TODO validateArray(measures, 'measures')
    validateString(goal, 'goal')

    return User.findById(nutritionistId) //busco al nutritionist y me traigo id
        .then(nutritionist => {
            if (!nutritionist) throw new NotFoundError(`nutritionist with id ${nutritionistId} not found`)

            if (nutritionist.role !== User.NUTRITIONIST)
                throw new AuthError(`user with id ${nutritionistId} is not an nutritionist`)

            return bcrypt.hash(password, 10)
                .then(hash => User.create({ name, email, password: hash, nutritionist: nutritionistId, age, weight, height, measures, goal }))
                .then(patient => { })
                .catch(error => {
                    if (error.message.includes('duplicate')) //del error de mongo la palabra duplcate
                        throw new DuplicityError(`patient with email ${email} already exists`)

                    throw error
                })
        })
}

module.exports = createPatient