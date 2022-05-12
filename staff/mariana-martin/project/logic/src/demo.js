const { mongoose: { connect, disconnect }} = require('data')
const {registerUser} = require('.')

//connect to run
connect('mongodb://localhost:27017/project')
    .then(() => console.log('connected'))
    .then(() => {
        try{
            //return devuelve esta promesa si no se va al siguiente then que desconecta
           return registerUser(0, '', 'mari', 'mari@mail.com', '123456789' )
                .then(() => console.log('User Registered'))
                .catch(error => console.log(error))
        }catch(error){
            console.error(error)
        }

        // try{
        //     return authenticateUser()
        //     .then
        // }
    })
    .then(()=> disconnect())
    .then(() => console.log('disconnected'))