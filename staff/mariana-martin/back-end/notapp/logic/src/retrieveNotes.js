//Recupero todas las notas mías: las devuelvo
//Si recupero nota de alguién más: necesito miId y el Id del usuario , so:
//o si hacemos click en un usuario veremos todas sus notas

const { models : { Note }} = require('data')
const { validators: { validateId }} =require('commons')

//TODO Validar si el usuario y owner existe

function retrieveNotes(userId, ownerId){
    validateId(userId, 'user id') //'user id' como 2do paramentro para los validators (explain)
    validateId(ownerId, 'owner id')

    if(userId === ownerId) //si son mis notas
        return Note.find({ user: userId }).lean() //la propiedad user en las notas, contiene a quien pertenece , find->filtro->userId->
            .then(notes => {                //.lean devuelve doc planos, no conectados a base de datos
                        //ya con las notas, hago forEach para limpiar c/u
                notes.forEach(note => {
                    note.id = note._id.toString()  //guardo el string del id

                    delete note._id
                    delete note.__v
                })

                return notes
            }) //if: si no                          //sólo las publicas
            else return Note.find({ user: ownerId, public:true}).lean() 
                .then(notes => {                //.lean devuelve obj planos
                    notes.forEach(note => {
                        note.id = note._id.toString()

                        delete note._id
                        delete note.__v
                    })

                    return notes
                })     
}

module.exports =retrieveNotes
