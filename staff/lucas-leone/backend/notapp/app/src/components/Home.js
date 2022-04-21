import { useState } from 'react'
import Modal from './Modal'
import Note from './Note'
import Feed from './Feed'
import MyNotes from './MyNotes'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import './Home.css'

export default ({ onLoggedOut }) => {
    const [modal, setModal] = useState()
    const [refresh, setRefresh] = useState()

    const navigate = useNavigate()

    const handleLogout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const handleCloseModal = () => setModal(false)

    const handleOpenCreateNote = () => setModal(true)

    const handleCloseModalAndReloadNotes = () => {
        handleCloseModal()

        setRefresh(Date.now())
    }

    const handleMyNotes = () => navigate('/my-notes')

    return <div className="Home">
        <div className="Home__content">
            <nav className="Home__nav">
                <h1 className="Home__nav-home-button"><Link to="/">home</Link></h1>

                <div className="Home__nav-action-buttons">
                    <button onClick={handleOpenCreateNote}>+</button>
                    <button onClick={handleMyNotes}>My notes</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            <main className="Home__main">
                <Routes>
                    <Route path="/*" element={<Feed refresh={refresh} />} />
                    <Route path="/my-notes/*" element={<MyNotes refresh={refresh} />} />
                </Routes>
            </main>
        </div>

        {modal && <Modal content={
            <Note note={{}} controls={true} onSaved={handleCloseModalAndReloadNotes} />
        } onClose={handleCloseModal} />}
    </div>
}