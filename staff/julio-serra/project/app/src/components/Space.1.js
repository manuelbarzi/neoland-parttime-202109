import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import React from 'react'
import Cards from './Cards'

export default function Space({ imageUrl }) {
    const { token } = sessionStorage
    const navigate = useNavigate()
    const loggedOut = () => {
        delete sessionStorage.token
        navigate('/')
    }

    return (
        <>
            <header className="pt-8">
                <nav className="flex justify-between">
                    <div className="flex items-center gap-5">
                        <a href="/">
                            <picture>
                                <img src={logo} width="60" alt="logo space local" />
                            </picture>
                        </a>
                        <span className="nav__text text-3xl">Space Local</span>
                    </div>
                    <div className="flex gap-12 items-center">
                        {token ?
                            <p className='cursor-pointer nav__font black text-xl' onClick={loggedOut}>Log Out</p>
                            : <span className="nav__font black text-xl hover:text-principal-color"><a href="/login">Login</a></span>
                        }
                        <span className="nav__font black text-xl hover:text-principal-color"><a href="/register">Register</a></span>
                    </div>
                </nav>
            </header>

            <section>
                <div>
                <picture className="flex justify-center"><img src={imageUrl} alt='' /></picture>
               <Cards />
                </div>
            </section>

        </>
    )
}