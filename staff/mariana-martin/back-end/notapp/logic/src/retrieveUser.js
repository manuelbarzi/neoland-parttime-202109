const { User } = require('data/src/models')

function retrieveUser(userId, noteId){

    //Validations

    
  /*   User.findById(id,(err, docs)=>{
        if(err) console.error(err)
        else{
            return docs
        }
    }) */

        return  User.findById(id)
        .then(doc => doc)
}

module.exports = retrieveUser