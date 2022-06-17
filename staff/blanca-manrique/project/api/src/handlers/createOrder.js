const { extractUserIdFromAuthorization } = require('./helpers')
const { createOrder } = require('logic')
const { errors: { AuthError, NotFoundError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try {
        const { body: {  status } } = req
        const userId = extractUserIdFromAuthorization(req)
       
        createOrder(userId, status)
        .then(() => res.status(201).send())
        .catch(error => {
            let status = 500

            if (error instanceof AuthError)
                status = 401

            else if (error instanceof NotFoundError )
                status = 404

            res.status(status).json({ error: error.message })
        })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}
