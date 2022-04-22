const { mongoose: {connect, disconnect } } = require('data')
const { 
    registerUser, 
    authenticateUser, 
    retrieveUser, 
    deleteUser, 
    updateUser, 
    createNote,
    retrieveNotes, 
    retrieveNote,
    retrievePublicNotes,
    updateNote,
    deleteNote,
    findPublicNotes  } = require('.')

connect('mongodb://localhost:27017/notapp')
    .then(()=> console.log('connected to db'))
    .then(()=> {
        /* try{
            return retrieveUserNotes('62211cbb80bf256643e376e3')
                .then((notes)=> console.log(`Notes from user 62211cbb80bf256643e376e3 ${notes}`))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        } */
      /*   try{
            return retrievePublicNotes('62211cbb80bf256643e376e2')
                .then((notes)=> console.log(notes))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        }  */
        /* try{
            return updateNote('62211cbb80bf256643e376eb', 'hola, estoy cambiando el texto', 'blue', true)
                .then(()=> console.log('Nota actualizada'))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        }  */
    /*     try{
            return deleteNote("62211cbb80bf256643e376e3",'62211cbb80bf256643e376eb')
                .then(()=> console.log('Nota eliminada'))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        }  */

        try{
            return findPublicNotes("6228f1444829fc96605ea05c")
                .then((notes)=> console.log(notes))
                .catch(error => console.error(error))
        }catch (error){
            console.error(error)
        } 

    })
    .then(()=> disconnect())
    .then(()=> console.log('diconnected from db'))