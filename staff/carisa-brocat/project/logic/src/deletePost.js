const { models: { User, Post } } = require('data')
const { errors: {
    NotFoundError
},
    validators: {
        validateId,
    }
} = require('commons')

function deletePost(userId, postId) {
    validateId(postId, 'postId')
    validateId(userId, 'userId')

    return User.findById(userId)
        .then(user => {

            return Post.deleteOne({ _id: postId })
        })
        .then(result => {
            const postDeleted = result.deletedCount

            if (postDeleted === 0)
                throw new NotFoundError('Not comment have been deleted.Check if the comment already exist')
        })
}

module.exports = deletePost
