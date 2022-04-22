const { User } = require("data/src/models")

/* import {validators} from 'commons'
const {validateId} = validators */

function retrieveUser(userId){

/*   validateId(userId) */

    // findById
  /*   User.findById(id,(err, docs)=>{
        if(err) console.error(err)
        else{
            return docs
        }
    }) */

        return  User.findById(userId)
        .then(user => {
            const doc = user._doc

            doc.id = doc._id.toString()
            delete doc._id
            delete doc.__v
            
            return doc
            })
  



}

module.exports = retrieveUser