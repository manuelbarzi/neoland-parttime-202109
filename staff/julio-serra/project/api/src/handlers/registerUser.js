const { registerUser } = require('logic')
const { errors: { DuplicityError } } = require('commons')

module.exports = (req, res) => {
    try {
        const { body: { name, email, password } } = req
        registerUser(name, email, password)
            .then(() => {
                res.status(201).send()
                    .catch(error => {

                        let status = 400

                        if (error instanceof DuplicityError)

                            status = 409

                        res.status(400).json({ error: error.message })
                    })
            })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}