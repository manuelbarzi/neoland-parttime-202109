import { useState } from 'react'
import Modal from './Modal'
import CreateNote from './CreateNote'
import Feed from './Feed'
import MyNotes from './MyNotes'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'

export default ({ onLoggedOut }) => {
    const [modal, setModal] = useState()
    const [refresh, setRefresh] = useState()

    const navigate = useNavigate()

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

    const handleMyNotes = () => navigate('/my-notes')

    return <div>
        <h1><Link to="/">home</Link></h1>
        <button onClick={handleOpenModal}>+</button>
        <button onClick={handleMyNotes}>My notes</button>
        <button onClick={handleLogout}>Logout</button>

        <Routes>
            <Route path="/*" element={<Feed refresh={refresh} />} />
            <Route path="/my-notes/*" element={<MyNotes refresh={refresh} />} />
        </Routes>

        {modal && <Modal content={
            <CreateNote onCreated={handleCloseModalAndReloadNotes} />
        } onClose={handleCloseModal} />}
    </div>
}