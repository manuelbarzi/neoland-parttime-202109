const { models: { User } } = require('../../data')

function deleteUser(id, password) {
    return User.findById(id)
        .then(user => {
            if (!user) throw new Error(`user with ${id} not found`)

            if (user.password !== password) throw new Error('wrong credentials')
            return User.deleteOne({ _id: id })

            .then(result => {
                if (result.deletedCount === 0) throw new Error (`cannot delete user with id ${id}`)
            })
        })
}

module.exports = deleteUser