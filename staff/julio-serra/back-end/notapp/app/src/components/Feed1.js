import { useEffect, useState } from "react"
import { retrievePublicNotes } from '../logic'
import './Feed.css'
import Modal from './Modal'
import { Routes, Route, useNavigate } from 'react-router-dom'

export default ({ refresh }) => {
    const [notes, setNotes] = useState()
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


    return (
        <div className="Feed">
            {notes ? <ul className="Feed__list grid grid-cols-3 gap-6 pt-5">
                {notes.map(note => <li className={`Feed__item Feed__item--${note.color} h-52 w-52 p-6`} key={note.id} > {note.text}</li>)}
            </ul> : <p>no notes</p>}
            <Routes>
                <Route path="n/:noteId" element={<Modal content={<h1>Hola modal</h1>} onClose={handleCloseModal} />} />
            </Routes>

        </div>
    )

}