import { useState } from 'react'
import Modal from './Modal'
import Note from './Note'
import MyNotes from './MyNotes'
import Feed from './Feed'
import './Home.css'
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

    return <div className='Home'>
        <header className='Header'>
            <h1><Link to='/'>NoteThat</Link></h1>
            <button className='Home__button Home__button--add' onClick={handleOpenModal}>+</button>
            <button className='Home__button' onClick={handleMyNotes}>My Notes</button>
            <img className='Home__button Home__button--logOut' onClick={handleLogout} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ75vof0_ph2WsRPJaSTYQPyzk0CCCiTECw&usqp=CAU" />
        </header>

        <Routes>
            <Route path='/*' element={<Feed refresh={refresh}/>}/>
            <Route path='/my-notes/*' element={<MyNotes refresh={refresh}/>}/>
        </Routes>
        
        {modal && <Modal content={
            <Note note={{}} controls={true} onSaved={handleCloseModalAndReloadNotes} />
        } onClose={handleCloseModal} />}
    </div>
}