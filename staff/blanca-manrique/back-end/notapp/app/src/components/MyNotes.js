import { useState, useEffect } from 'react'
import { retrieveNotes } from '../logic'
import './MyNotes.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Note from './Note'
import Modal from './Modal'
import Item from './Item'

function MyNotes() {
    const [notes, setNotes] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleCloseModal = () => navigate('/notes')

    const handleOpenItem = noteId => {
        navigate(`${noteId}`)
    }

    return <div className="MyNotes">
        <h1>My Notes</h1>
        {notes ? <ul className="MyNotes__list">
            {notes.map(note =>
                <li key={note.id}>
                    <Note note={note} onItemClick={handleOpenItem}/>
                </li>)}
        </ul> : <p>no notes</p>}
        <Routes>
            <Route path=":noteId" element={<Modal content={<Item />} onClose={handleCloseModal} />} />
        </Routes>
    </div>

}
export default MyNotes