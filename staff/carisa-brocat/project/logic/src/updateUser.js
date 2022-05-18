const { models: { User } } = require('data')
const { errors: {
    NotFoundError,
    ClientError,
},
    validators: {
        validateString,
        validateEmail,
        validateId,
    }
} = require('commons')

function updateUser(userId, nickname, email, image, hairTexture, interests) {
    validateId(userId, 'userId')
    validateString(nickname, 'nickname')
    validateEmail(email)
    if (hairTexture) {
        validateString(hairTexture, 'hairTexture')
    }
    if (interests) {
        validateString(interests, 'interests')
    }

    return User.updateOne({ _id: userId }, { nickname, email, image, hairTexture, interests })
        .then(result => {
            const usersIdFinded = result.matchedCount //el matchedCount es una propiedad del updateOne que devuelve el numero de objetos encontrados con el parametro, en este caso userId 

            if (usersIdFinded === 0)
                throw new NotFoundError(`user with id ${userId} not found`)
        })
        .catch(error => {
            throw new ClientError(error.message)
        })
}

module.exports = updateUser
