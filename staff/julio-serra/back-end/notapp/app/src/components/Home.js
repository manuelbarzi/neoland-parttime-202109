import { useState } from "react"
import Modal from './Modal'
import Note from './Note'
import Feed from './Feed'
import MyNotes from "./MyNotes"
import { Route, Routes, useNavigate } from "react-router-dom"


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

        setRefresh(Date.now)
    }

    const handleMyNotes = () => navigate('/my-notes')

    return (
        <>
            <div className="bg-cover h-screen bg-right bg-slate-200">
                <header className="w-full container mx-auto p-6">
                    <nav className="flex justify-between items-center">
                        <a href="/">
                        <div className="flex items-center hover:text-indigo-300 text-indigo-400 text-4xl font-bold"><svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path>
                        </svg>AppNote</div>
                        </a>

                        <div className="gap-10 flex text-violet-700 text-xl">
                            <span><a onClick={handleMyNotes} className="cursor-pointer flex gap-3 items-center">My Notes</a></span>
                            <span><a className="cursor-pointer flex gap-3 items-center hover:underline hover:underline-offset-8" onClick={handleLogout}>Logout <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg></a></span>
                        </div>
                    </nav>

                </header>

                <section className="bg-white container w-screen mx-auto mt-12 py-12 px-6">
                    <div className="grid justify-center">
                        <h1 className="text-2xl font-bold text-center">Feed de NoteApp</h1>

                        <div className="py-5 flex justify-center underline underline-offset-4">
                            <button className="flex items-center gap-2" onClick={handleOpenModal}>
                                <span className="text-xl">Add Note</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                </svg></button>
                        </div>
                        <section className="grid justify-center">
                            <span className="flex justify-center text-indigo-800">
                                </span>
                        </section>

                        <Routes>
                            <Route path="/*" element={<Feed refresh={refresh} />} />
                            <Route path="/my-notes/*" element={<MyNotes refresh={refresh} />} />
                        </Routes>

                        {modal && <Modal content={
                            <Note onCreated={handleCloseModalAndReloadNotes} />
                        } onClose={handleCloseModal} />
                        }
                    </div>
                </section>

            </div>
        </>
    )
}