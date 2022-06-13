import { useState } from 'react'
import Feed from "./Feed"
import Detail from './Detail'
import { Routes, Route, useNavigate } from 'react-router-dom'
import CreateList from './CreateList'

export default function ({ onLoggedOut }) {
    const [refresh, setRefresh] = useState()
    const [section, setSection] = useState()
    const navigate = useNavigate()

    const logout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }
    const handleClose = () => {
        navigate(`/`)
    }

    const handleCreateList = () => {

        navigate(`/list`)
    }





    return <div>
        <button onClick={logout}>Logout</button>
        <button onClick={handleCreateList}>+</button>
        <Routes>
            <Route path='/list' element={<CreateList onSaved={handleClose}/>} />
            <Route path="l/:listId" element={<Detail />} />
            <Route path="/*" element={<Feed refresh={refresh} />} />
        </Routes>

    </div>
}


