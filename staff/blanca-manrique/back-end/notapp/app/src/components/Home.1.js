import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'
import Modal from './Modal'
import CreateNote from './CreateNote'

function Home({ onLoggedOut }) {
    const [notes, setNotes] = useState()
    const [modal, setModal] = useState()

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

    const logout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const handleCloseModal = () => setModal(false)

    const handleOpenModal = () => setModal(true)

    const handleCloseModalAndReloadNotes = () => {
        handleCloseModal()
        loadNotes()
    }

    return <div>
        <h1>home</h1>
        <button onClick={logout}>Logout</button>
        <button onClick={handleOpenModal}>+</button>

        {notes ? <ul>
            {notes.map(note => <li key={note.id}>{note.text}</li>)}
        </ul> : <p>no notes</p>}

        {modal &&
            <Modal content={
                <CreateNote onCreated={handleCloseModalAndReloadNotes} />
            }
                onClose={handleCloseModal}
            />
        }
    </div>
}
export default Home