import { useEffect, useState } from "react"
import { retrieveNotes } from "../logic"
import Modal from './Modal'
import './MyNotes.css'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Note from './Note'
import Item from './Item'

export default ({refresh}) =>{
    const [ notes, setNotes ] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        handleRefresh()
    }, [refresh])

    const handleRefresh = () => {
        try {
            retrieveNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCloseModal = () => {
        handleRefresh()
        navigate('/my-notes')
    }

    const handleGoToNote = noteId => navigate(`/my-notes/${noteId}`)

    return <div className="MyNotes">
        <h2>My Notes</h2>
        { notes ? 
        <ul className="MyNotes__list">
            {notes.map(note => <li key={note.id} onClick={() => handleGoToNote(note.id)}> <Note note={note}/></li>)}
        </ul>
        : <p>No Notes!</p>}


        <Routes>
            <Route path=":noteId" element={<Modal content={<Item onSaved={handleCloseModal} onDeleted={handleCloseModal} />} onClose={handleCloseModal} />} />
           
        </Routes>
    </div>


}