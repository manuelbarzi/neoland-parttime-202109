const { models: { User, Post } } = require('data')
const { errors: {
    NotFoundError
}, validators: {
    validateId,
    validateString,
}
} = require('commons')

function retrievePostsBy(userId, category, subject) {
    validateId(userId, 'userId')
    if (category) {
        validateString(category, 'category')
    }
    if (subject) {
        validateString(subject, 'subject')
    }

    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }

            return Post.find({ category, subject }).lean().populate('user').sort('-date')
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

module.exports = retrievePostsBy