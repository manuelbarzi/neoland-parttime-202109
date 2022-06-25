
const { sendContactEmailFromRequest } = require('logic');
const { errors: { AuthError, FormatError}} = require('commons');
const { extractUserIdFromAuthorization } = require('./helpers')

module.exports = (req, res) => {
    

    try {
        const { params: { requestId, offerId  } } = req
        const companyId = extractUserIdFromAuthorization(req)


        sendContactEmailFromRequest (requestId, offerId, companyId )
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

