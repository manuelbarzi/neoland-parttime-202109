const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const deleteUser = require('./deleteUser')
const retrieveUser = require('./retrieveUser')
const createSpace = require('./createSpace')
const retrieveSpace = require('./retrieveSpace')
const deleteSpace = require('./deleteSpace')
const createReview = require('./createReview')
const deleteReview = require('./deleteReview')
const addReviewToSpace = require('./addReviewToSpace')
const createBooking = require('./createBooking')
const deleteReviewToSpace = require('./deleteReviewToSpace')


module.exports = {
    registerUser,
    authenticateUser,
    deleteUser,
    retrieveUser,
    createSpace,
    retrieveSpace,
    deleteSpace,
    createReview,
    deleteReview,
    addReviewToSpace,
    createBooking,
    deleteReviewToSpace

}