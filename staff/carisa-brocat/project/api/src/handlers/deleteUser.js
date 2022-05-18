const {deleteUser} = require('logic')
const extractUserIdFromToken = require('./helpers/extractUserIdFromToken')
const {errors: {AuthError, FormatError, ClientError} } = require('commons')

module.exports = (req, res) => {
    try {
         const userId = extractUserIdFromToken(req)

         const { body: { password } } = req

        deleteUser(userId, password)
            .then(result => res.status(200).send())
            .catch(error => {
                let status = 500

                if (error instanceof AuthError)
                    status = 401

                if (error instanceof ClientError)
                    status = 400
        
                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError || error instanceof ClientError)
            status = 400

        res.status(status).json({ error: error.message })
    }

}





