import { useEffect, useState } from "react"
import { retrievePublicNotes } from '../logic'
import './Feed.css'
import Modal from './Modal'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Item from './Item'
import Note from './Note'

export default ({ refresh }) => {
    const [notes, setNotes] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        refreshNotes()
    }, [refresh])


    const refreshNotes = () => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCloseModal = () => {
        navigate('/')

        refreshNotes()
    }

    const handleGoToNote = noteId => navigate(`/n/${noteId}`)


    return (
        <div className="Feed">
            {notes ? <ul className="Feed__list grid grid-cols-3 gap-6 pt-5">
                {notes.map(note => <li onClick={() => handleGoToNote(note.id)} key={note.id}><Note note={note} onDeleted={handleCloseModal} /></li>)}
            </ul> : <p>no notes</p>}
            <Routes>
                <Route path="n/:noteId" element={<Modal content={<Item onSaved={handleCloseModal} onDeleted={handleCloseModal} />} onClose={handleCloseModal} />} />
            </Routes>

        </div>
    )

}