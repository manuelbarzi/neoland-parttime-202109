const { extractUserIdFromAuthorization } = require('./helpers')
const { updateCompany } = require('logic')

module.exports = (req, res) => {

  
    try {
        const companyId = extractUserIdFromAuthorization(req)
        
        //const { body: { name, email, password, description,  stack, location, link } } = req
        const { body: { name, description, location, link } } = req

       // updateCompany(companyId, name, email, password, description,  stack, location, link)

        updateCompany(companyId, name, description, location, link)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} 