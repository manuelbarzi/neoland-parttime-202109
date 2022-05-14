const { models: { User, Review } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function deleteReview(userId, reviewId) {
    validateId(userId, ' user id')
    validateId(reviewId, 'review id')

    return Promise.all([User.findById(userId), Review.findById(reviewId)])
        .then(([user, review]) => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)
            if (!review) throw new NotFoundError(`review with id ${reviewId} not found`)

            return Review.deleteOne({ _id: reviewId })
        })
        .then(() => { })
}


module.exports = deleteReview