const { retrieveNote } = require('logic')
const { extractUserIdFromAuthorization } = require('../helpers')
const { errors: { AuthError, NotFoundError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try {
        const id = extractUserIdFromAuthorization(req)

        const { params: { noteId } } = req

        retrieveNote(id, noteId)
            .then(notes => res.status(200).json(notes))
            .catch(error => {
                let status = 500

                if (error instanceof AuthError)
                    status = 401
                else if (error instanceof NotFoundError)
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