const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateEmail = require('./updateEmail')
const updatePassword = require('./updatePassword')
const deleteUser = require('./deleteUser')
const createPost = require('./createPost')
const deletePost = require('./deletePost')
const retrieveUserPosts = require('./retrieveUserPosts')
const retrieveAllPosts = require('./retrieveAllPosts')
const retrievePost = require('./retrievePost')
const updatePostFeedback = require('./updatePostFeedback')
const addCommentToPost = require('./addCommentToPost')
const retrievePostsBy = require('./retrievePostsBy')
const updateUserHairTextureAndInterests = require('./updateUserHairTextureAndInterests')
const updateFavoritePosts = require('./updateFavoritePosts')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    updatePassword,
    updateEmail,
    createPost,
    deletePost,
    retrieveUserPosts,
    retrieveAllPosts,
    retrievePost,
    updatePostFeedback,
    addCommentToPost,
    retrievePostsBy,
    updateUserHairTextureAndInterests,
    updateFavoritePosts
}
