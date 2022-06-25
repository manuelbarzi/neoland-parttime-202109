// const { mongoose: {connect, disconnect } } = require('data')
const { mongoose } = require('data')
const { 
    registerUser, 
    authenticateUser, 
    retrieveUser, 
    unregisterUser, 
    updateUser, 
  } = require('.')

mongoose.connect('mongodb://localhost:27017/project')
    .then(()=> console.log('connected to db'))
    .then(()=> {
        try{
            return registerUser(1, 'Horse Luis', 'horse@luis.com', '123456789', 'Soy majisimo', 'full-stack', 'Madrid', null)
                .then(()=> console.log('usuario registrado'))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        }
   

    })
    .then(()=> mongoose.disconnect())
    .then(()=> console.log('diconnected from db'))