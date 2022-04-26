import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'
import Modal from './Modal'
import CreateNote from './CreateNote'

export default ({ onLoggedOut}) => {

    const [notes, setNotes] = useState()
    const [modal, setModal] = useState()  //cambio estado de modal

    const loadNotes = () => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        
       loadNotes()
    }, [])

    const handleLogout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const handleCloseModal = () => setModal(false)

    const handleOpenModal = () => setModal(true)

    const handleCloseModalAndReloadNotes = () =>{
        handleCloseModal()

        loadNotes()
    }

    return <div>
        <h1>Home</h1>
        <button onClick={handleOpenModal}>+</button>
        <button onClick={handleLogout}>Logout</button>

        {notes? <ul>
            {notes.map(note => <li key={note.id}>{note.text}</li>)}
        </ul> : <p>no notes</p>}

        
        {modal && <Modal content={
            <CreateNote onCreated={handleCloseModalAndReloadNotes} /> //recarga notas pantalla al crear una nota
        } onClose={handleCloseModal} />}

    </div>
}