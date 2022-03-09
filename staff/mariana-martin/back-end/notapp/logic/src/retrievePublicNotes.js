const { models :{ Note, User }} = require('data')

//será el feed, me traeré todas las notas que haya:

function retrievePublicNotes(userId){

    return User.findById(userId)
        .then( doc => {
            if (!doc) throw new Error ('You should be logged in to continue...')
            else return Note.find({ public: true })
                .then(notes => notes )
        })
}

modules.exports = retrievePublicNotes