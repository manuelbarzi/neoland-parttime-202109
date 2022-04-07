import { useEffect, useState } from 'react'
import {retrievePublicNotes } from '../logic'
import './Feed.css'
import Modal from './Modal'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Note from './Note'
import Item from './Item'

export default ({ refresh }) => {

    const [notes, setNotes ] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
            
        }
    }, [refresh])

    const handleCloseModal = () => navigate('/')

    return <div className='Feed'>
        {notes ? <ul className='Feed__list'>
            {notes.map(note => <li key={note.id}><Note note={note} /></li>)} 
            </ul> : <p>No notes!</p>}

            <Routes>
            <Route path="n/:noteId" element={<Modal content={<Item />} onClose={handleCloseModal} />} />
        </Routes>

    </div>
}