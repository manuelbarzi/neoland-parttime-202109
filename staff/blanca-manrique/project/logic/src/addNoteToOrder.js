const { models: { User, Note, Order } } = require('data')
const { validators: { validateId, validateString, validateNumber }, errors: { NotFoundError, AuthError, DuplicityError } } = require('commons')


function addNoteToOrder(userId, orderId, text) {
    validateId(userId, 'user id')
    validateId(orderId, 'order id')
    validateString(text, 'text')

    return Promise.all([User.findById(userId), Order.findById(orderId)])
        .then(([user, order]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!order) throw new NotFoundError(`order with id ${orderId} not found`)
            if (order.user.toString() !== userId) throw new AuthError(`user with id ${userId} is not allowed to retrieve order with id ${orderId}`)

            const note = new Note({ user: userId, text })

            order.notes.push(note)

            return order.save()

        })
        .then(order => { })
}

module.exports = addNoteToOrder