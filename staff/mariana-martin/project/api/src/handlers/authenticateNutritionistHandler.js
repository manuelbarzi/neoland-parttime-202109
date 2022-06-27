const { authenticateNutritionist } = require('logic')
const { env: { JWT_SECRET, JWT_EXP }} = process
const { sign } = require('jsonwebtoken')
const {errors: { AuthError}} = require('commons')
const { FormatError } = require('commons/src/errors')

module.exports = (req, res ) => {
    try {
        const { body: { email, password }} = req

        authenticateNutritionist( email, password )
            .then(nutritionistId => {
                const token = sign({ sub: nutritionistId}, JWT_SECRET, { expiresIn: JWT_EXP} )

                res.status(200).json({ token })
            })
            .catch(error => {
                let status = 500

                if(error instanceof AuthError)
                    status = 401
                
                res.status(status).json({ error: error.message})
            })
    } catch (error) {
        let status = 500

        if(error instanceof TypeError || error instanceof FormatError)
            status =400

            res.status(status).json({ error: error.message})
        
    }
}