const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveUser } =require('logic')

module.exports = (req, res) => {   
    try {
        
        const userId = extractUserIdFromAuthorization(req)  //delego a esta función que llamo para extraer el Id 

        retrieveUser(userId)                                                          
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
            res.status(400).json({ error: error.message })
    }
}