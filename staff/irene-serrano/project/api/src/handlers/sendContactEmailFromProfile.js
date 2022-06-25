const { sendContactEmailFromProfile } = require('logic') 

const { errors: { AuthError, FormatError}} = require('commons');
const { extractUserIdFromAuthorization } = require('./helpers')

module.exports = (req, res) => {
    try {
        const { params: { developerId  } } = req
        const companyId = extractUserIdFromAuthorization(req)


        sendContactEmailFromProfile (developerId, companyId )
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

