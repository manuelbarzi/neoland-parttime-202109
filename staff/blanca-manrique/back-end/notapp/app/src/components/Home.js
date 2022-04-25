import { useState } from 'react'
import Modal from './Modal'
import CreateNote from './CreateNote'
import Feed from './Feed'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import MyNotes from './MyNotes'
import Profile from './Profile'
import './Home.css'

function Home({ onLoggedOut }) {
    const [modal, setModal] = useState()
    const [refresh, setRefresh] = useState() //inicialmente está undefined, es decir, es como false
    const navigate = useNavigate()

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

    const handleOpenMyNotes = () => navigate('/my-notes')

    const handleOpenProfile = () => navigate('/profile')

    return <div className='home'>
        <div className='home__content'>

            <nav className='home__nav'>
                <h1 className='home__nav-logo'><Link to="/">home</Link></h1>
                <div className='home__nav-buttons'>
                    <button onClick={logout}>Logout</button>
                    <button onClick={handleOpenModal}>+</button>
                    <button onClick={handleOpenMyNotes}>My notes</button>
                    <button onClick={handleOpenProfile}>Profile</button>
                </div>
            </nav>

            <main className='home__main'>
                <Routes>
                    <Route path='/*' element={<Feed refresh={refresh} />} />
                    <Route path='/my-notes/*' element={<MyNotes refresh={refresh} />} />
                    <Route path='profile/*' element={<Profile />}/>
                </Routes>
            </main>
        </div>


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