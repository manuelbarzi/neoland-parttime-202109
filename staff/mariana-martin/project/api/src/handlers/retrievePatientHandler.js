const { extractUserIdFromAuthorization} = require('./helpers')
const { retrievePatient } = require('logic')

module.exports = (req, res) => {

    try {

         //aquí uso userID, qué usuario solicita el retrieve, Puede ser un nutritionist o patient
        const userId = extractUserIdFromAuthorization(req)

        const { params: { patientId }} = req  //recupero el parametro si existe, puede venir no informado ( cuando es el paciente que se quiere recuperar, en ese caso sería user)
                                //si no recibo el 2do parametro (patientId) es el propio paciente queriendo recuperarse
        retrievePatient(userId, patientId)
            .then(patient => res.json(patient))
            .catch( error => res.status(400).json({error: error.message}))
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}