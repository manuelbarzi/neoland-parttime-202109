const { models: { User }} = require('data')

function deleteUser(userId, password) {
    // TODO delete all notes from user, before deleting him/her self
    
    return User.deleteOne({ _id: userId, password })
        .then(result => {
            const { deletedCount } = result

            if (deletedCount === 0)
                throw new Error(`user with id ${userId} not found or wrong credentials`)
        })
}

module.exports = deleteUser