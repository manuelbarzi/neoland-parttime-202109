const { createPart } = require('logic')
const { extractUserIdFromAuthorization } = require('./helpersUser')
const { errors: { DuplicityError, TypeError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { vehicleId }, body: { description, image, state } } = req

        createPart(userId, vehicleId, description, image, state)
            .then(() => res.status(201).send())
            .catch(error => {
                let status = 500

                if (error instanceof DuplicityError)
                    status = 409

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(400).json({ error: error.message })
    }
}