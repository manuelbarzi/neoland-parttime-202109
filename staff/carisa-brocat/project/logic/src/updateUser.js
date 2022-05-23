const { models: { User } } = require('data')
const { errors: {
    NotFoundError,
    DuplicityError
},
    validators: {
        validateString,
        validateId,
    }
} = require('commons')

function updateUser(userId, nickname, image, hairTexture, interests, favoritePosts) {
    validateId(userId, 'userId')
    if (nickname)
        validateString(nickname, 'nickname')

    if (hairTexture)
        validateString(hairTexture, 'hairTexture')

    if (interests)
        validateString(interests, 'interests')


    return User.updateOne({ _id: userId }, { nickname, image, hairTexture, interests, favoritePosts})
        .then(result => {
            const usersIdFinded = result.matchedCount //el matchedCount es una propiedad del updateOne que devuelve el numero de objetos encontrados con el parametro, en este caso userId 

            if (usersIdFinded === 0)
                throw new NotFoundError(`user with not found`)
        })
        .catch(error => {
            if (error.message.includes('duplicate') & error.message.includes('nickname'))
                throw new DuplicityError('This nickname is already in use')
        })
}

module.exports = updateUser
