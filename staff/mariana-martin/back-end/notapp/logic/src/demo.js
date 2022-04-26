const { mongoose: { connect, disconnect }} = require('data')
const { createNote, retrieveNote, retrieveNotes, retrievePublicNotes, updateNote , deleteNote } = require('.')


connect('mongodb://localhost:27017/notapp')
    .then(() => console.log('connected to data-base'))
    
    .then(() => {


        //******** CREATE NOTE:
        // try{
        //     return createNote('62220ac92a96f8c799c05dcf', 'pink', 'Esta es OTRA una nota de prueba y es publica')
        //     .then((notes) => console.log(`Nota de prueba ->  ${notes}`))  
        //     .catch(error => console.error(error))
    
        // }catch (error){
        //     console.log(error)
        // }



       //******** RETRIEVE NOTE:
    //     try{

    //     return retrieveNote('62220ac92a96f8c799c05dce', '62220ac92a96f8c799c05dd3')
    //     .then((notes) => console.log(`Notes from user 62220ac92a96f8c799c05dce ${notes}`))  
    //     .catch(error => console.error(error))

    // }catch (error){
    //     console.log(error)
    // }




        //******** RETRIEVE NOTESSS: 
        // try{

        //     return retrieveNotes('62220ac92a96f8c799c05dcf', '62220ac92a96f8c799c05dcf')
        //     .then((notes) => console.log(`these are the user62220ac92a96f8c799c05dcf notes ${notes}`))
           
        //     .catch(error => console.error(error))
    
        // }catch (error){
        //     console.log(error)
        // }
    
         //******** RETRIEVE PUBLIC NOTESSS:  (no funciona, da array vacío y con la interpolación sólo el console.log)

        //  try{

        //     return retrievePublicNotes('62220ac92a96f8c799c05dcf')
        //     .then((notes) => console.log(`These are ALL the public notes ${notes}`))
        //     .catch(error => console.error(error))
    
        // }catch (error){
        //     console.error(error)
        // }




         //******** UPDATE NOTE:

        //  try{

        //     return updateNote('62274c638b68caf6267cef68', 'Esta es una nota actualizada', 'green', true)
        //     .then(() => console.log('Nota Actualizada'))
        //     .catch(error => console.error(error))
    
        // }catch (error){
        //     console.error(error)
        // }




 //******** DELETE NOTE:


        try{

            return deleteNote('622b2363d43725790752f32a','622b4445efb91f24ca81a90e')
            .then(() => console.log('Nota Eliminada'))
            .catch(error => console.error(error))

        }catch (error){
            console.error(error)
        }

    })

    .then(()=> disconnect())
    .then(()=> console.log('disconnected from data-base'))