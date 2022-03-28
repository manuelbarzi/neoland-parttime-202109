import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'
import Modal from './Modal'
import CreateNote from './CreateNote'

export default ({ onLoggedOut }) => {
    const [notes, setNotes] = useState()
    const [modal, setModal] = useState()

    useEffect(() => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const logout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const closeModal = () => setModal(false)

    const openModal = () => setModal(true)

    return <div>
        <h1>home</h1>
        <button onClick={openModal}>+</button>
        <button onClick={logout}>Logout</button>

        {notes ? <ul>
            {notes.map(note => <li key={note.id}>{note.text}</li>)}
        </ul> : <p>no notes</p>}

        {modal && <Modal content={
            <CreateNote onCreated={closeModal} />
        } onClose={closeModal}/>}
    </div>
}