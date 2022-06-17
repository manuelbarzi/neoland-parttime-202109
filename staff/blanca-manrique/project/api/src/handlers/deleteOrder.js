const { extractUserIdFromAuthorization } = require('./helpers')
const { deleteOrder } = require('logic')
const { errors: { AuthError, NotFoundError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        const { params: { orderId} } = req

        deleteOrder(userId, orderId)
            .then(() => res.status(204).json())
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404
                
                else if (error instanceof AuthError)
                    status = 401

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}