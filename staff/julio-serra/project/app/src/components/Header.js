import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export default function Header() {
    const navigate = useNavigate()

    const { token } = sessionStorage
    const loggedOut = () => {
        delete sessionStorage.token
        navigate('/')
    }

        const handleClickLogo = () => navigate('/')
        const handleClickLogin = () => navigate('/login')
        const handleClickRegister = () => navigate('/register')


    return (
        <>
            <header className="pt-8">
                <nav className="flex justify-between">
                    <div className="flex items-center gap-5"><picture>
                        <img className='cursor-pointer' onClick={handleClickLogo} src={logo} width="60" alt="logo space local" />
                    </picture>
                        <span className="nav__text text-3xl">Space Local</span>
                    </div>
                    <div className="flex gap-12 items-center">
                        {token ?
                            <p className='cursor-pointer nav__font black text-xl' onClick={loggedOut}>Log Out</p>
                            : <span onClick={handleClickLogin} className="cursor-pointer nav__font black text-xl hover:text-principal-color">Login</span>
                        }
                        <span onClick={handleClickRegister} className="cursor-pointer nav__font black text-xl hover:text-principal-color">Register</span>
                    </div>
                </nav>
            </header>
        </>
    )
}