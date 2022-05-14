const { models: { User, Space, Review } } = require('data')
const { validators: { validateId, validateString, validateRange } } = require('commons')

function addReviewToSpace(userId, spaceId, text, score) {
    validateId(userId, 'user id')
    validateId(spaceId, 'space id')
    validateString(text, 'text')
    validateRange(score, 0, 1, 'score')

    return Promise.all([User.findById(userId), Space.findById(spaceId)])
        .then(([user, space]) => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (!space) throw new Error(`user with id ${spaceId} not found`)

            const review = new Review({ user: userId, text, score })

            space.comments.push(review)

            return space.save()
        })
        .then(space => { })
}


module.exports = addReviewToSpace