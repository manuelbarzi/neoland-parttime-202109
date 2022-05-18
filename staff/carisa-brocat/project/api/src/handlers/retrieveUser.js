const {retrieveUser} = require('logic')
const extractUserIdFromToken = require('./helpers/extractUserIdFromToken')
const {errors: {AuthError, FormatError, ClientError} } = require('commons')

module.exports = (req, res) => {
    try {
         const userId = extractUserIdFromToken(req)

        retrieveUser(userId)
            .then(user => res.status(200).send({user}))
            .catch(error => {
                let status = 500

                if (error instanceof ClientError)
                    status = 400
        
                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError || error instanceof ClientError)
            status = 400

        if (error instanceof AuthError)
            status = 401

        res.status(status).json({ error: error.message })
    }

}





