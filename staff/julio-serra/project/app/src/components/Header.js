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

                    <div className='w-2/4'>
                        <form>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Spaces..." required="" />
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
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