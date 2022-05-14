const { models: { User, Review } } = require('data')
const { validators: { validateId, validateString, validateRange } } = require('commons')

function createReview(userId, text, score) {
    validateId(userId, 'user id')
    validateString(text, 'text')
    validateRange(score, 0, 5, 'score')

    return User.findById(userId)

        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Review.create({ user: userId, text, score })
        })
        .then(review => { })
}

module.exports = createReview