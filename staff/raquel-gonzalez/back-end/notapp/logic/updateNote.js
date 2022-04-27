/*const { Note } = require('data/src/models')
// const {models: {Note} } = require ("data")

function updateNote (userId,  noteId, text, color, public ){

    //buscamos la nota por el critero (user e id) si lo encontramos pues modificamos
    return Note.updateOne ({ user: userId, _id: noteId}, { text, color, public })
        .then ( result =>{
            //si el matchedcount es 0 no ha encontrado la nota con lo que salta el error
            if (matchedCount === 0 ) throw new Error (`note with id ${noteId} and user ud ${userId} not found`)

        })
}
module.exports = updateNote*/

const { models: { Note }} = require('data')

function updateNote(userId, noteId, text, color, public) {
    // TODO validate input arguments

    return Note.updateOne({ user: userId, _id: noteId }, { text, color, public })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = updateNote