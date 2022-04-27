const { models : { User } } = require ("data")
const { user } = require ("data/src/schemas")

function deleteUser (id, password){
    return User.deleteOne ({ _id :id, password : password})

}

module.exports = deleteUser