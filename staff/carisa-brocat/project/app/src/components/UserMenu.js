import './UserMenu.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { errors } from 'commons'
const { AuthError } = errors

export default ({ handleSavedPosts, menuOpen, handleMenu, handleMyPosts, onLoggedOut }) => {
    const navigate = useNavigate()
   
    const closeMenu = () => {
        handleMenu()
    }

    const showSavedPosts = event => {
        event.preventDefault()

        handleSavedPosts()

        handleMenu()
    }

    const showMyPosts = event => {
        event.preventDefault()

        handleMyPosts()

        handleMenu()
    }

    const handleUnregister = () => navigate('/unregister')

    return <div>
        <div className={`${menuOpen ? 'userMenu userMenu--opened' : 'userMenu userMenu--closed'}`}>
            <button onClick={closeMenu}>x</button>
            <h2 onClick={showSavedPosts}>My Saved Posts</h2>
            <h2 onClick={showMyPosts}>My Posts</h2>
            <h2 >Configurations</h2>
            <h2 onClick={handleUnregister}>Unregister</h2>
            <h2 onClick={onLoggedOut}>LogOut</h2>
        </div>
    </div>
}