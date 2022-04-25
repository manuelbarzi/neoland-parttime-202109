import Note from './Note'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { retrieveNote } from '../logic'

export default ({onNoteDeleted, onNoteSaved}) => {
    const [note, setNote] = useState()
    
    const params = useParams()

    const { noteId } = params

    useEffect(() => {
        try {
            retrieveNote(sessionStorage.token, noteId)
                .then(setNote)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [noteId])

    return <>
        {note && <Note note={note} constrols={true} onNoteSaved={onNoteSaved} onNoteDeleted={onNoteDeleted}/>}
    </>
}