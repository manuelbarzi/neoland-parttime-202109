const { models: { User, Space, Review } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')
const { space } = require('data/src/schemas')

function deleteReviewToSpace(adminId, spaceId, reviewId) {
    validateId(adminId, 'admin id')
    validateId(spaceId, 'space id')
    validateId(reviewId, 'review id')

    return Promise.all([User.findById(adminId), Space.findById(spaceId)])
        .then(([user, space]) => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)
            if (!space) throw new NotFoundError(`space with id ${spaceId} not found`)

            const { reviews } = space

            const reviewIndex = reviews.findIndex(review => review.id === reviewId)

            if (reviewIndex < 0)
                throw new NotFoundError(`space with id ${spaceId} not found`)
            
            reviews.splice(reviewIndex, 1)
            
            return space.save()
        })
        .then(() => { })
}

module.exports = deleteReviewToSpace