const { authenticatePatient } = require('logic')
const { env: { JWT_SECRET } } = process
const { sign } = require('jsonwebtoken')
const { errors: { AuthError, FormatError, TypeError }} = require('commons')


module.exports = (req, res ) => {
    try {
        const { body: { email, password}} = req

        authenticatePatient(email, password)
        
            .then(patientId => {
                const token = sign({ sub: patientId}, JWT_SECRET)

                res.status(200).json({ token })
            })
            .catch(error =>{
                let status = 500

                if(error instanceof AuthError)
                status =401

                res.status(status).json({error:error.message})
            })
    } catch (error) {
        let status = 500

        if(error instanceof TypeError || error instanceof FormatError)
        status = 400

        res.status(status).json({ error: error.message })
        
    }
}