const { extractUserIdFromAuthorization } = require('./helpers')
const { createSupplier } = require('logic')
const { errors: { DuplicityError, NotFoundError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try {
        const { body: { name, email, web, phone, adress, contactPerson, tradeAssurance } } = req
        const userId = extractUserIdFromAuthorization(req)
       
        createSupplier(userId, name, email, web, phone, adress, contactPerson, tradeAssurance)
        .then(() => res.status(201).send())
        .catch(error => {
            let status = 500

            if (error instanceof DuplicityError)
                status = 409

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
