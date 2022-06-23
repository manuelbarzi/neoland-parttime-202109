const { models: { User, Post } } = require('data')
const { errors: {
    NotFoundError
}, validators: {
    validateId,
}
} = require('commons')

function retrieveUserSavedPosts(userId) {
    validateId(userId, 'userId')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} not found`)

            const { savedPosts } = user

            return Post.find({ _id: { $in: savedPosts } }).lean().populate('user').sort('-date')
        })
        .then(posts => {
            if (posts.length)
                posts.forEach(post => {
                    post.id = post._id.toString()
                    delete post._id

                    post.userId = post.user._id.toString()
                    post.userNickname = post.user.nickname
                    delete post.user

                    delete post.__v

                    const { comments } = post

                    if (comments) {
                        comments.forEach(comment => {
                            comment.id = comment._id.toString()
                            delete comment._id

                            comment.userId = comment.user._id.toString()
                            comment.userNickname = comment.user.nickname
                            delete comment.user

                            delete comment.__v
                        })
                    }
                })

            return posts
        })
}

module.exports = retrieveUserSavedPosts