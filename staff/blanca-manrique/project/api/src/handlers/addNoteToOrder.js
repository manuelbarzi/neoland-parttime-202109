const { extractUserIdFromAuthorization } = require('./helpers')
const { addNoteToOrder } = require('logic')
const { errors: { NotFoundError, FormatError, DuplicityError, AuthError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        const { params: { orderId }, body: { text } } = req

        addNoteToOrder(userId, orderId, text)
            .then(() => res.status(204).json())
            .catch(error => {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404

                else if (error instanceof DuplicityError)
                    status = 409
                
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