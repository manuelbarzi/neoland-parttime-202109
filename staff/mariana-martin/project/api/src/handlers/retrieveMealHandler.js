const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveMeal} = require('logic')
const { errors: { AuthError, NotFoundError, FormatError}} = require('commons')

module.exports = (req, res) => {
    try {
        
        const nutritionistId = extractUserIdFromAuthorization(req)

        const { params: { mealId }} = req

        retrieveMeal(nutritionistId, mealId)
            .then(meal => res.status(200).json(meal))
            .catch(error => {
                let status = 500

                if(error instanceof AuthError)
                    status =401
                else if (error instanceof NotFoundError)
                    status = 404
                
                res.status(status).json({ error: error.message})
            })
    } catch (error) {
        let status = 500

        if(error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error:error.message})
        
    }

}