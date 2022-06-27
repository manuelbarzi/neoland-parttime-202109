const { models: { User }} = require('data')
const { validators: { validateId, validatePassword}, errors: { NotFoundError, AuthError }} = require('commons')
const bcrypt = require('bcryptjs')


function deletePatient(nutritionistId, password, patientId){
    validateId(nutritionistId, 'nutritionist id')
    validatePassword(password)
    validateId(patientId, 'patient id')
   

    return User.findById(nutritionistId)
        .then(nutritionist => {
            if(!nutritionist) throw new NotFoundError(`nutritionist with id ${nutritionistId} not found`)

            return bcrypt.compare(password, nutritionist.password)
        })
        .then(match => {
            if(!match) throw new AuthError('wrong crdentials')

            return User.findById(patientId)
            .then(patient => {
                if(!patient) throw new NotFoundError(`patient with id ${patientId} not found`)

                return User.deleteOne({ _id: patientId})
            })
            .then(result => {
                const { deletedCount } =result

                if(deletedCount === 0)
                throw new Error(`could not delete patient with id ${patientId}`)
            })
        })
}

module.exports = deletePatient