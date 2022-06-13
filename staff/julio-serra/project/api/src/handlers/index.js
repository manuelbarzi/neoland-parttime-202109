const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const deleteUser = require('./deleteUser')
const createSpace = require('./createSpace')
const retrieveSpace = require('./retrieveSpace')
const retrieveAllSpaces = require('./retrieveAllSpaces')
const deleteSpace = require('./deleteSpace')
const addReviewToSpace = require('./addReviewToSpace')
const addBookingToSpace = require('./addBookingToSpace')
const deleteReviewToSpace = require('./deleteReviewToSpace')
const deleteBookingToSpace = require('./deleteBookingToSpace')
const findSpaces = require('./findSpaces')
const retrieveLattestSpaces = require('./retrieveLattestSpaces')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    deleteUser,
    createSpace,
    retrieveSpace,
    retrieveAllSpaces,
    deleteSpace,
    addReviewToSpace,
    addBookingToSpace,
    deleteReviewToSpace,
    deleteBookingToSpace,
    findSpaces,
    retrieveLattestSpaces
}