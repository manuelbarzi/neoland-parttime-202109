const { validators : {validateId, validateEmail, validatePassword }} = require('../../commons')
const { models: { User } } = require('../../data')

function deleteUser(id, password) {
    validateId(id)
    validatePassword(password)
    
    return User.deleteOne({ _id: id, password })

        .then(result => {
            const { deletedCount } = result
            if (deletedCount === 0)
                throw new Error(`user with id ${id} not found or wrong credentials`)
        })
}
module.exports = deleteUser