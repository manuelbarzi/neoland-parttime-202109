import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Landing from "./Landing";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import {useState} from 'react'

export default function(){

    const navigate =useNavigate()
    const { token } = sessionStorage
    const[loggedIn, setLoggedIn] =useState(!!token)
    
    const handleLoggedOut= ()=>{
        setLoggedIn(false)
    }
    const handleLoggedIn= ()=>{
        setLoggedIn(true)
        navigate('/')
    }

    const handleRegistered=()=>{<Navigate to="/login"/>}
    
    
    return <Routes>
        <Route path="/*" element={loggedIn?<Home onLoggedOut={handleLoggedOut}/>: <Landing />}/>
        <Route path="/register" element={loggedIn?<Navigate to="/"/>: <Register onRegistered={handleRegistered} />}/>
        <Route path="/login" element={loggedIn?<Navigate to="/"/>: <Login onLogged={handleLoggedIn} />}/>
    </Routes>
}