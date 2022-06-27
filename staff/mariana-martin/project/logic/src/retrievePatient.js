const { models: { User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError, AuthError } } = require('commons')

                //userId que solicita ver esa info(puede ser nutri o patient, por eso user)
                //este primer Id viene del token
function retrievePatient(userId, patientId) {
    validateId(userId, 'user id') //valido el user que solicita si es nutritionist o patient

    if (!patientId) //si no viene el segundo parametro, es el paciente que quiere recuperarse
        return User.findById(userId).lean()
            .then(patient => {
                if (!patient) throw new NotFoundError(`patient with id ${userId} not found`)

                patient.id = patient._id.toString()
                delete patient.__v

                delete patient.password

                return patient
            })
    else {
        validateId(patientId, 'patient id')  //si si se envía el 2do parametro, es un nutri quieriendo recuperar un paciente y valido

        return Promise.all([User.findById(userId).lean(), User.findById(patientId)])
            .then(([nutritionist, patient]) => {
                if (!nutritionist) throw new NotFoundError(`nutritionist with id ${userId} not found`) //si el nutri no existe

                if (nutritionist.role !== User.NUTRITIONIST) //valido si es nutritionist (role 0)
                    throw new AuthError(`user with id ${userId} is not an nutritionist`)

                if (patient.nutritionist.toString() !== userId) //verifico si ese id que tiene nutri es el id del user(en este caso el nutri), si es su paciente
                    throw new AuthError(`nutritionist with id ${userId} is not a nutritionist of patient with id ${patientId}`)

                patient.id = patient._id.toString()
                delete patient.__v

                delete patient.password

                return patient
            })
    }


}
module.exports = retrievePatient
