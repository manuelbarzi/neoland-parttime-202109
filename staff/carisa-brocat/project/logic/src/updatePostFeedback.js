const { models: { User, Post } } = require('data')
const { errors: {
    NotFoundError
}, validators: {
    validateId,
}
} = require('commons')

function updatePostFeedback(userId, postId, likes, dislikes) {
    validateId(postId, 'postId')
    validateId(userId, 'userId')

    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            return Post.updateOne({ _id: postId }, { likes, dislikes })
        })
        .then(result => {
            const postIdFinded = result.matchedCount //el matchedCount es una propiedad del updateOne que devuelve el numero de objetos encontrados con el parametro, en este caso userId 

            if (postIdFinded === 0)
                throw new NotFoundError('post not found')
        })

}

module.exports = updatePostFeedback