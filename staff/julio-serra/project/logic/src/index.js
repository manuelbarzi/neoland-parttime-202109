const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const deleteUser = require('./deleteUser')
const retrieveUser = require('./retrieveUser')
const createSpace = require('./createSpace')
const retrieveSpace = require('./retrieveSpace')
const deleteSpace = require('./deleteSpace')
const addReviewToSpace = require('./addReviewToSpace')
const addBookingToSpace = require('./addBookingToSpace')
const deleteReviewToSpace = require('./deleteReviewToSpace')
const deleteBookingToSpace = require('./deleteBookingToSpace')


module.exports = {
    registerUser,
    authenticateUser,
    deleteUser,
    retrieveUser,
    createSpace,
    retrieveSpace,
    deleteSpace,
    addReviewToSpace,
    addBookingToSpace,
    deleteReviewToSpace,
    deleteBookingToSpace

}