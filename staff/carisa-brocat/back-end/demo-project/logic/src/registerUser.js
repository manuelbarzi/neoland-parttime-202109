const { models: { User } } = require('data')

function registerUser(name, email, password) {

   /* const user = new User({ name, email, password })

    return user.save()
        .then(user => { })
*/

    return User.create({ name, email, password }) //.create crea usuario y lo guarda
        .then(user => { })
}

module.exports = registerUser