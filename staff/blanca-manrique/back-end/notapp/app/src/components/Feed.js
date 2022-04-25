import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'
import './Feed.css'
import Modal from './Modal'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Note from './Note'
import Item from './Item'

function Feed({ refresh }) {
    const [notes, setNotes] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        refreshPublicNotes()
    }, [refresh])

    const refreshPublicNotes = () => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleOpenItem = noteId => {
        navigate(`${noteId}`)
    }

    const handleCloseModal = () => {
        refreshPublicNotes()
        navigate('/')
    }

    return <div className="Feed">
        {notes ? <ul className="Feed__list">
            {notes.map(note =>
                <li key={note.id} onClick={() => handleOpenItem(note.id)} >
                    <Note note={note} />
                </li>)}
        </ul> : <p>no notes</p>}

        <Routes>
            <Route path=":noteId" element={<Modal content={<Item onSaved={handleCloseModal} onDeleted={handleCloseModal}/>} onClose={handleCloseModal} />} />
        </Routes>
    </div>
}
export default Feed