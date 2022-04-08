import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './Feed.css'
import Modal from './Modal'
import Item from './Item'
import Note from './Note'

export default ({ refresh }) => {
    const [notes, setNotes] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        handleRefresh()
    }, [refresh])

    const handleCloseModal = () => navigate('/')

    const handleRefresh = () => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        {notes ? <ul className="Feed__list">
            {notes.map(note => <li key={note.id}><Note note={note} onDeleted={handleRefresh} /></li>)}
        </ul> : <p>no notes</p>}

        <Routes>
            <Route path="n/:noteId" element={<Modal content={<Item />} onClose={handleCloseModal} />} />
        </Routes>
    </div>


}