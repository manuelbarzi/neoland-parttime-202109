import Note from './Note'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { retrieveNote } from '../logic'

function MyNotes() {
    const [note, setNote] = useState() //inicialmente, note === undefined

    const params = useParams()

    // const noteId = params.noteId (params.el nombre del parámetro)
    const { noteId } = params
    //cuando cambie noteId -->

    useEffect(() => {
        try {
            retrieveNote(sessionStorage.token, noteId)
                .then(note => setNote(note))    
                // .then(setNote) //llamamos directamente al callback setNote --> que nos guarde note en el state
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [noteId]) //<-- que recupere la nota correspondiente. Se va a volver a ejecutar useEffect

    return <>
        {note && <Note note={note} />}
    </> //que me pinte la nota SÓLO si hay notas.
    //¿Por qué hacemos esto?:
    //El useEffect tarda en cargarse, por lo que: para el primer render note ===undefined --> Error, ya que no hay nota que pintar
    //Para que no nos saque un error, le decimos que sólo se pinte cuando tenga una nota
}
export default MyNotes