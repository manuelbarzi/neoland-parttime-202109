const { models: { User } } = require('data')
const { errors: {
    NotFoundError,
    ClientError,
},
    validators: {
        validatePassword,
        validateId
    }
} = require('commons')
const { encryptPassword } = require('./helpers/crypt')

function updatePassword(userId, password) {
    validateId(userId, 'userId')
    validatePassword(password)

    return encryptPassword(password)
        .then(hash => {
            return User.updateOne({ _id: userId }, { password: hash })
                .then(result => {
                    const usersIdFinded = result.matchedCount //el matchedCount es una propiedad del updateOne que devuelve el numero de objetos encontrados con el parametro, en este caso userId 

                    if (usersIdFinded === 0)
                        throw new NotFoundError(`user with id ${userId} not found`)
                })
                .catch(error => {
                    throw new ClientError(error.message)
                })
        })
}

module.exports = updatePassword
