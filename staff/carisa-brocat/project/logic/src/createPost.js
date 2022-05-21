const { models: { User, Post } } = require('data')
const { errors: {
    AuthError
},
    validators: {
        validateString,
        validateId,
        //validateNumber
        //validateImage
        //validateArray
    }
} = require('commons')

function createPost(userId, title, description, category, subject, image, address) {
    validateString(title, 'title')
    validateId(userId, 'id')

    return User.findById(userId)
        .then(user => {

            return Post.create({ user: userId, title, description, category, subject, image, address })

        })
        .then(post => { })
}

module.exports = createPost