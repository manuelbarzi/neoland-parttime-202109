import { registerUser } from '../logic'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export default function Register() {

    const navigate = useNavigate()
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event //extraer los campos

        try {
            registerUser(name, email, password)
                .then(() => alert('User Registered'))
                .then(() => navigate('/'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const { token } = sessionStorage

    const handleClickLanding = () => navigate('/')
    const handleClickLogin = () => navigate('/login')



    return (
        <>

            <section className="w-full mx-auto pt-24 px-6 bg-tertiary-color h-screen relative">
                <div>
                    <h1 className="nav__font text-4xl font-bold text-center pb-8 text-white">Create Account</h1>
                    <h3 className="nav__font text-xl font-bold text-center pb-8 text-white">Account Information</h3>

                    <form className="grid gap-6 w-full xl:w-1/4 mx-auto" onSubmit={register}>
                        <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span
                                    className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                >
                                    <i className="fas fa-user-circle"></i>
                                </span>
                            </div>
                            <input
                                type="text" name='name'
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="Username"
                            />
                        </div>
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
                                type="password" name='password'
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
                            Get Started
                        </button>
                    </form>
                </div>

                <div className='pb-10 bottom-0 absolute m-auto left-0 right-0 flex flex-col items-center gap-5'>
                    <p className='text-white'>Already have an account? <span className='text-secondary-color font-bold cursor-pointer' onClick={handleClickLogin}>Log in</span></p>
                    <a className='cursor-pointer' onClick={handleClickLanding}><img src={logo} alt='' width="60" /></a>
                </div>

            </section>
        </>
    )
}