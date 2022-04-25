const { models: { User } } = require('data')

function deleteUser(id, password) {
    //TODO validations
    return User.deleteOne({ _id: id, password: password })
}
module.exports = deleteUser