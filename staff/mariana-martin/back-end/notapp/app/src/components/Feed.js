import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'
import './Feed.css'
import Modal from './Modal'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Note from './Note'
import Item from './Item'

export default ({ refresh }) => {

    const [notes, setNotes] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        handleRefresh()
    }, [refresh])



    const handleRefresh = () => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)

        }
    }

    const handleCloseModal = () => {
        handleRefresh()

        navigate('/')
    }

    const handleGoToNote = noteId => navigate(`/n/${noteId}`)


    return <div className='Feed'>
        {notes ?
            <ul className="Feed__list">
                {notes.map(note => <li key={note.id} onClick={() => handleGoToNote(note.id)}><Note note={note} /></li>)}
            </ul> : <p>No notes!! :(</p>
        }


        <Routes>
            <Route path="n/:noteId" element={<Modal content={<Item onSaved={handleCloseModal} onDeleted={handleCloseModal} />} onClose={handleCloseModal} />} />
        </Routes>

    </div>
}