const { validators: { validateId} }  = require('commons')
const { models: {User} } = require('data')

function retrieveAllPatients(adminId) {
    validateId(adminId, explain='admin id')

    //la propiedad nutritionist(id) del patient debe ser igual al id de admin
    
    return User.findById(adminId) //busco al admin y me traigo id
        .then(admin => {
            if (!admin) throw new Error(`admin with id ${adminId} not found`)

            return User.find({ nutritionist: adminId }).lean()

            .then(patients => {
                patients.forEach(patient => {
                    patient.id = patient._id.toString()

                    delete patient._id
                    delete patient.__v
                })
                return patients
            })
        })
}

module.exports = retrieveAllPatients