import { useState } from 'react'
import './Home.css'
import Modal from './Modal'
import Note from './Note'
import Feed from './Feed'
import MyNotes from './MyNotes'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'

export default ({ onLoggedOut}) => {
 
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
        <h1><Link to="/">NotApp Home</Link></h1>
        <div className="menu">
        <button className="button" onClick={handleMyNotes}>My Notes</button>
        <button className="button" onClick={handleOpenModal}>+</button>
        <button className="button" onClick={handleLogout}>Logout</button>
        </div>
       

        <Routes>
            <Route path="/*" element={<Feed refresh={refresh} />} />
            <Route path="/my-notes/*" element={<MyNotes refresh={refresh} />} />
        </Routes>
        
        {modal && <Modal content={
            <Note note={{}} controls={true} onSaved={handleCloseModalAndReloadNotes} /> //recarga notas pantalla al crear una nota
        } onClose={handleCloseModal} />}

    </div>
}