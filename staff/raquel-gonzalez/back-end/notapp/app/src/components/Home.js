import { useState } from 'react'
import Modal from './Modal'
import CreateNote from './CreateNote'
import Feed from './Feed'

export default ({ onLoggedOut }) => {
    const [modal, setModal] = useState()
    const [refresh, setRefresh] = useState()

    const handleLogout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const handleCloseModal = () => setModal(false)

    const handleOpenModal = () => setModal(true)

    const handleCloseModalAndReloadNotes = () => {
        handleCloseModal()

        setRefresh(Date.now())
    }

    return <div>
        <h1>home</h1>
        <button onClick={handleOpenModal}>+</button>
        <button onClick={handleLogout}>Logout</button>

        <Feed refresh={refresh} />

        {modal && <Modal content={
            <CreateNote onCreated={handleCloseModalAndReloadNotes} />
        } onClose={handleCloseModal} />}
    </div>
}