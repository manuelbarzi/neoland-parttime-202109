const { mongoose: {connect, disconnect } } = require('data')
const { registerUser, authenticateUser, retrieveUser, deleteUser, updateUser, retrieveUserNotes  } = require('.')

connect('mongodb://localhost:27017/notapp')
    .then(()=> console.log('connected to db'))
    .then(()=> {
        try{
            return retrieveUserNotes('622244d78c668338dcad71e2')
                .then((notes)=> console.log(`Notes from user 622244d78c668338dcad71e2 ${notes}`))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        }


    })
    .then(()=> disconnect())
    .then(()=> console.log('diconnected from db'))