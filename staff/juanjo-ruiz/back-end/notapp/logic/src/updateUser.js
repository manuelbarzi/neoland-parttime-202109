const { models: { User } } = require('data')

function updateUser(id, updateUser) {
    //TODO validaciones

    return User.updateOne({ _id: id}, updateUser)
}

module.exports = updateUser