const { createNote } = require('logic')
const {extractUserIdFromAuthorization} = require('./helpers')


module.exports = (req, res) => {
    try {

        const userId = extractUserIdFromAuthorization(req)
        const { body: {text, color, public}} = req  //del body extraigo text, color, pub
       

        createNote(userId, text, color, public)
        .then(() => res.status(201).send())  //creado
        .catch(error => res.status(400).json({ error: error.message}))
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}