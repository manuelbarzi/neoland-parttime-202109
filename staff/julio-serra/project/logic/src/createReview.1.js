const { models: { User, Space, Review } } = require('data')
const { validators: { validateId, validateString, validateRange } } = require('commons')

function createReview(userId, spaceId, text, score) {
    validateId(userId, 'user id')
    validateId(spaceId, 'space id'),
    validateString(text, 'text')
    validateRange(score, 0, 5, 'score')

    return Promise.all([User.findById(userId), Space.findById(spaceId)])

        .then(([user, space]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!space) throw new NotFoundError(`space with id ${spaceId} not found`)

            return Review.create({ user: userId, text, score })
        })
        .then(review => { })
}

module.exports = createReview