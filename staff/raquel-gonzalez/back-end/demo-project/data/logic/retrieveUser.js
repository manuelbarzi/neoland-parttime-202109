const { User } = require (data/src/models)

function retrieveUser (id){
    return User.findById (id)
    .then (doc => doc)


}

module.exports = retrieveUser