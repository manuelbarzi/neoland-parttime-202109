const { User } = require('../../data/src/models')

// metodo findByID

    // User.findById(id,(err, docs) => {
    //     if (err) console.error(err)
    //     else return docs
    // })


function retrieveUser(id) {
    return User.findById(id)
    .then(doc => doc)
}

module.exports = retrieveUser