const { models: { User, Post } } = require('data')
const { errors: {
    NotFoundError
}, validators: {
    validateId,
}
} = require('commons')

function retrieveAllPosts(userId) {
    validateId(userId, 'userId')

    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }

            return Post.find().lean().populate('user').sort('-date')
        })
        .then(posts => {
            if (!posts)
                throw new NotFoundError('No posts to show')

            posts.forEach(post => {
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
            })

            return posts
        })
}

module.exports = retrieveAllPosts