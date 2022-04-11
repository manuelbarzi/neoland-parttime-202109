import { useState } from 'react'
import Modal from './Modal'
import CreateNote from './CreateNote'
import Feed from './Feed'
import './Home.css'

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

    return <div className='Home'>
        <header className='Header'>
            <h1>NoteThat</h1>
            <button className='Home__button Home__button--add' onClick={handleOpenModal}>+</button>
            <img className='Home__button Home__button--logOut' onClick={handleLogout} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ75vof0_ph2WsRPJaSTYQPyzk0CCCiTECw&usqp=CAU" />
            {/* <button className='Home__button Home__button--logOut' onClick={handleLogout}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ75vof0_ph2WsRPJaSTYQPyzk0CCCiTECw&usqp=CAU"></img></button> */}
        </header>

        <Feed refresh={refresh} />

        {modal && <Modal content={
            <CreateNote onCreated={handleCloseModalAndReloadNotes} />
        } onClose={handleCloseModal} />}
    </div>
}