import { useState } from 'react'
import Modal from './Modal'
import CreateNote from './CreateNote'
import Feed from './Feed'

function Home({ onLoggedOut }) {
    const [modal, setModal] = useState()
    const [refresh, setRefresh] = useState() //inicialmente está undefined, es decir, es como false
    
    const logout = () => {
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
        <button onClick={logout}>Logout</button>
        <button onClick={handleOpenModal}>+</button>

        <Feed refresh={refresh} />

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