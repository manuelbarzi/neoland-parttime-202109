const { models: { User, Post } } = require('data')
const { errors: {
    NotFoundError
}, validators: {
    validateId,
}
} = require('commons')
const { validateInterests } = require('./helpers/validateData')

function retrieveAllPosts(userId) {
    validateId(userId, 'userId')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            const interests = user.interests

            if (interests)
                validateInterests(interests)

            return Promise.all([
                Post.find({ subject: { $in: interests } }).lean().populate('user').sort('-date'),
                Post.find({ subject: { $not: { $in: interests } } }).lean().populate('user').sort('-date')
            ])
        })
        .then(([interestedPosts, otherPosts]) => {
            const posts = interestedPosts.concat(otherPosts)

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
                            comment.userId = comment.user._id
                            comment.userNickname = comment.user.nickname

                            delete comment._id
                            delete comment.__v
                            delete comment.user
                        })
                    }
                })

            return posts
        })
}

module.exports = retrieveAllPosts