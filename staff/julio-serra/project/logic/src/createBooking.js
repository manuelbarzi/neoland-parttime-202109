const { models: { User, Space, Booking } } = require('data')
const { validators: { validateId } } = require('commons')

function createBooking(userId, spaceId) {
    validateId(userId, 'user id')
    validateId(spaceId, 'space id')

    return Promise.all([User.findById(userId), Space.findById(spaceId)])
        .then(([user, space]) => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (!space) throw new Error(`user with id ${spaceId} not found`)

            const booking = new Booking({ user: userId, space: spaceId })

            space.bookings.push(booking)

            return space.save()

        })
        .then(space => { })
}


module.exports = createBooking