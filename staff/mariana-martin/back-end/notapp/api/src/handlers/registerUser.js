//Manejador RegisterUser
const { registerUser } = require('logic') //el handler necesita la lógica 

module.exports = (req, res ) => {
    try {
        const {body: { name, email, password }} = req

        registerUser(name, email, password)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message}))

    } catch (error) {
        res.status(400).json({ error: error.message})
        
    }
}