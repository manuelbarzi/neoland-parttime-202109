const { models: { User }} = require('data')
const {validators: {validateId, validateName, validateEmail, validatePassword, validateNumber, validateString }, errors: { AuthError, NotFoundError}} = require('commons')
const bcrypt = require('bcryptjs')

function updatePatient(nutritionistId, patientId, name, email, password, age, weight, height, measures, goal ){
    validateId(nutritionistId, 'nutritionist id')
    validateId(patientId, 'patient id')
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    validateNumber(age, 'age')
    validateNumber(weight, 'weight')
    validateNumber(height, 'height')
    // validateArray(measures, 'measures')
    validateString(goal, 'goal')

    return Promise.all([User.findById(nutritionistId), User.findById(patientId)])
        .then(([nutritionist, patient]) =>{ 

            if(!nutritionist) throw new Error(`nutritionist with id ${nutritionistId} not found`)
            if(!patient) throw new Error(`patient with id ${patientId} not found`)

            if(nutritionist.role !== User.NUTRITIONIST)
            throw new AuthError(`cannot edit, user with id ${userId} is not an nutritionist`)

            if (patient.nutritionist.toString() !== nutritionistId) throw new AuthError(`patient with id ${patientId} does not belong to user with nutritionist id ${nutritionistId}`)

            //importante se debe autenticar patient en insomnia si no, no actualiza sus datos.
            return bcrypt.hash(password, 10)
                .then(hash => User.updateOne({ _id: patientId}, {name, email, password: hash, nutritionist: nutritionistId, age, weight, height, measures, goal}))
                .then(result => { 
                    const { matchedCount } = result

                    if(matchedCount === 0)
                    throw new Error(`patient with id ${patientId} not found`)

                    
                })
                .then(patient => {})
            })
            

}

module.exports = updatePatient