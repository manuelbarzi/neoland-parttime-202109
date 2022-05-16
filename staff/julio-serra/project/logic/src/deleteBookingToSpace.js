const { models: { User, Space } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function deleteBookingToSpace(adminId, spaceId, bookingId) {
    validateId(adminId, 'admin id')
    validateId(spaceId, 'space id')
    validateId(bookingId, 'booking id')

    return Promise.all([User.findById(adminId), Space.findById(spaceId)])
        .then(([user, space]) => {
            if (!user) throw new NotFoundError(`user with id ${adminId} not found`)
            if (!space) throw new NotFoundError(`space with id ${spaceId} not found`)

            const { bookings } = space

            const bookingIndex = bookings.findIndex(booking => booking.id === bookingId)

            if (bookingIndex < 0)
                throw new NotFoundError(`booking with id ${bookingId} not found`)

            bookings.splice(bookingIndex, 1)

            return space.save()
        })
        .then(() => { })
}

module.exports = deleteBookingToSpace