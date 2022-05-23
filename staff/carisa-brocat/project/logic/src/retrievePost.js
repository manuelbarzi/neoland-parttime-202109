const { models: { Post } } = require('data')
const { errors: {
    NotFoundError
}, validators: {
    validateId,
}
} = require('commons')

function retrievePost(postId) {
    validateId(postId, 'postId')

    return Post.findById(postId).lean().sort('-date')
        .then(post => {
            if (!post) {
                throw new NotFoundError('Post not found')
            }

            post.id = post._id.toString()

            delete post._id

            post.userId = post.user._id.toString()
            post.userName = post.user.name

            delete post.user

            delete post.__v

            const { comments } = post

            if (comments) {
                comments.forEach(comment => {
                    comment.id = comment._id.toString()
                    comment.userId = comment.user._id
                    comment.userName = comment.user.name

                    delete comment._id
                    delete comment.__v
                    delete comment.user_id
                    delete comment.user.name
                })
            }
            return post
        })
}

module.exports = retrievePost