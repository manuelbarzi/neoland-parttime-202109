const { retrieveNutritionist } = require('logic')
const { extractUserIdFromAuthorization} = require('./helpers')
const { errors: { NotFoundError, FormatError }} = require('commons')

module.exports = (req, res ) => {
    try {
        const nutritionistId = extractUserIdFromAuthorization(req)

        retrieveNutritionist(nutritionistId)
            .then(nutritionist => res.json(nutritionist))
            .catch(error => {
                let status =500

                if(error instanceof NotFoundError)
                status = 404

                res.status(status).json({ error: error.message })
            })
    } catch (error) {
        let status = 500

        if(error instanceof TypeError || error instanceof FormatError)
        status= 400

        res.status(status).json({ error: error.message})
    }
}