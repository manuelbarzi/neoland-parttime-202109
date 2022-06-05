const { models: { User } } = require('data')
const { errors: {
    NotFoundError,
},
    validators: {
        validateId,
        validateArray,
    }
} = require('commons')

function updateFavoritePosts(userId, favoritePosts) {
    validateId(userId, 'userId')
    validateArray(favoritePosts)


    return User.updateOne({ _id: userId }, {favoritePosts})
        .then(result => {
            const usersIdFinded = result.matchedCount //el matchedCount es una propiedad del updateOne que devuelve el numero de objetos encontrados con el parametro, en este caso userId 

            if (usersIdFinded === 0)
                throw new NotFoundError(`user with not found`)
        })
}

module.exports = updateFavoritePosts
