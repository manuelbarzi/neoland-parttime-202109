const { mongoose: { connect, disconnect }} = require('data')
// const {registerUser, createPatient} = require('.')
// const { models: { User }} = require('data')
// const bcrypt = require('bcryptjs')

//connect to run
connect('mongodb://localhost:27017/project')
    .then(() => console.log('connected'))
//     .then(() => {
//         try{
//             //return devuelve esta promesa si no se va al siguiente then que desconecta
//         //    return registerUser(0, '', 'mari', 'mari@mail.com', '123456789' )
//         //         .then(() => console.log('User Registered'))
//         //         .catch(error => console.log(error))
//         // }catch(error){
//         //     console.error(error)
//         // }
//         const hash = bcrypt.hashSync('123456789', 10)
//         return User.create({ role: 0, username: 'Admin Prueba', email: 'ad@mail.com', password: hash })


//         .then(admin => {
//         return createPatient(1, '', 'lola', 'lola@mail.com', '123456789',  admin.id, 30, 55, 177, [80,60,90], 'weight gain' )
//         .then(() => console.log('Patient Registered'))
//         .catch(error => console.log(error))
//     })
// }catch(error){
//     console.error(error)
// }

      
//     })
    .then(()=> disconnect())
    .then(() => console.log('disconnected'))