import React from 'react'
import logo from '../assets/img/logo.png'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import image1 from '../assets/img/image1.jpg'

export default function Space() {
    const navigate = useNavigate()

    const { token } = sessionStorage
    const loggedOut = () => {
        delete sessionStorage.token
        navigate('/')
    }
    
    return (
        <>

            <header className="pt-8">
                <nav className="flex justify-between">
                    <div className="flex items-center gap-5"><picture>
                        <img src={logo} width="60" alt="logo space local" />
                    </picture>
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
                    <img className='w-full' src={image1} alt='' />
                    <p>Title</p>
                    <span>Available...</span>
                    <p>Features</p>
                    <p>Price</p>
                    <p>More details</p>
                    <button>Checkout</button>
                </div>
            </section>
        </>
    )
}