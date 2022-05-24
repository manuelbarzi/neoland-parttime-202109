import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import Cards from './Cards'
export default function Landing() {

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
                            <p className='cursor-pointer' onClick={loggedOut}>Log Out</p>
                            : <span className="nav__font black text-xl hover:text-principal-color"><a href="/login">Login</a></span>
                        }
                        <span className="nav__font black text-xl hover:text-principal-color"><a href="/register">Register</a></span>
                    </div>
                </nav>
            </header>

            <section className='bg-principal-color h-96 grid items-center'>
                <container className='bg-secondary-color text-white p-5 m-9 h-5/6'>
                    <h1 className="nav__font text-4xl my-5">Why Space Rental</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </container>
            </section>
            <section>
                <Cards />
            </section>
            <footer className="grid grid-cols-2">
                <div className='bg-tertiary-color text-white p-15'>
                    <div className="flex items-center justify-evenly">
                        <img src={logo} width="45" alt="" />
                        <h1 className="nav__font black text-4xl">Space Rental</h1>
                    </div>
                    <div>
                        <p>Copyright 2022 · Space Rental <br />
                            All rights reserved</p>
                    </div>
                </div>
                <div>Redes Sociales</div>
            </footer>
        </>
    )

}
