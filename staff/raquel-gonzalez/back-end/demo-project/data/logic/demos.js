const { mongoose: {connect, disconnect } } = require('data')
const { registerUser, authenticateUser, retrieveUser, deleteUser } = require('.')

connect('mongodb://localhost:27017/my-store')
    .then(()=> console.log('connected to db'))
    .then(()=> {
       /*  try{
            return registerUser('Ma Ca', 'maca@ron.com', '123123123')
                .then(()=> console.log('user registered'))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        } */

    /*     try{
            return authenticateUser('maca@ron.com', '123123123')
                .then(id=> console.log('user authenticated', id))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        } */

      /*   try{
            return retrieveUser('621fc1fe5733dd8710ffd8fd')
                .then(doc=> console.log('obteniendo usuario ' + doc.name))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        } */

        try{
            return deleteUser('621e590ba18a711d9f254290', "123456789")
        
                .then(()=> console.log('usuario eliminado'))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        }
    })
    .then(()=> disconnect())
    .then(()=> console.log('diconnected from db'))