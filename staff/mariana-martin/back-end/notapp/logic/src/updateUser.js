const { models: { User }} = require('data')

function updateUser(userId, name, email, password){
    //Validators

    return User.updateOne({ _id: userId},{name, email, password})
        .then(result => {
            const { matchedCount } =result

            if(matchedCount === 0)
                throw new Error (`user with id ${userId} not found`)
        })

}

module.exports = updateUser