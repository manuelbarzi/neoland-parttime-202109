const {
    validators:
    { validateId, validateString },
} = require('commons')
const { models: { User, Space, Review } } = require('data')

function createSpace(adminId, text, reviewId) {
    validateId(adminId, 'admin id')
    validateString(text, 'text')
    validateString(reviewId, 'review id')
    
    return Promise.all([User.findById(adminId), Review.findById(reviewId)])
        .then(([user, review]) => {
            if (!user) throw new Error(`user with id ${adminId} not found`)
            if (!review) throw new Error(`review with id ${reviewId} not found`)

            return Space.create({ admin: adminId, text, review: reviewId })
        })
        .then(space => { })
}

module.exports = createSpace