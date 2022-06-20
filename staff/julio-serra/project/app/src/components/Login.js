import { authenticateUser } from "../logic";
import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo.png'

export default function AuthenticateUser({ onloggedIn }) {

    const navigate = useNavigate()

    const auth = event => {
        event.preventDefault()
        const { target: { email: { value: email }, password: { value: password } } } = event // extraemos los campos

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    onloggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleClickLanding = () => navigate('/')
    const handleClickRegister = () => navigate('/register')

    return (
        <>    <section className="w-full mx-auto pt-24 px-6 bg-principal-color h-screen relative">
            <div>
                <h1 className="nav__font text-4xl font-bold text-center pb-8 text-white">Hello Again!</h1>
                <h3 className="nav__font text-xl font-bold text-center pb-8 text-white">Wellcome back you’ve
                    been missed</h3>

                <form className="grid gap-6 w-full xl:w-1/4 mx-auto" onSubmit={auth}>
                <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span
                                    className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                                >
                                    <i className="fas fa-envelope"></i>
                                </span
                                >
                            </div>
                            <input
                                type="email" name="email"
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                                placeholder="Email"
                            />
                            <div className="flex -mr-px">
                                <span
                                    className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                                >
                                </span>
                            </div>
                        </div>
                    <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span
                                className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                            >
                                <i className="fas fa-lock"></i>
                            </span
                            >
                        </div>
                        <input
                            type="password" name="password"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                            placeholder="Password"
                        />
                        <div className="flex -mr-px">
                            <span
                                className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                            >
                                <i className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                    </div>

                    <button className="w-full bg-transparent hover:bg-indigo-400 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                        Sign in
                    </button>

                    <div className='flex flex-col items-center gap-5 pt-10'>
                        <p className='text-white'>Or continued with</p>
                        <div className="gap-10 flex">
                            <span><i className="border border-white border-radius-5 rounded-md p-3 text-secondary-color fa-brands fa-apple fa-2x"></i></span>
                            <span><i className="border border-white border-radius-5 rounded-md p-3 text-secondary-color fa-brands fa-instagram-square fa-2x"></i></span>
                            <span><i className="border border-white border-radius-5 rounded-md p-3 text-secondary-color fa-brands fa-facebook fa-2x"></i></span>
                        </div>
                    </div>
                    <div className='pb-10 bottom-0 absolute m-auto left-0 right-0 flex flex-col items-center gap-5'>
                        <p className='text-white'>Not a member? <span className='text-secondary-color font-bold cursor-pointer' onClick={handleClickRegister}>Register now</span></p>
                        <a className='cursor-pointer' onClick={handleClickLanding}><img src={logo} alt='' width="60" /></a>
                    </div>

                </form>
            </div>
        </section>


        </>

    )

}