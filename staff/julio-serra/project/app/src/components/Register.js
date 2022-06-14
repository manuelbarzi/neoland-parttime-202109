import { registerUser } from '../logic'
import { useNavigate } from 'react-router-dom'

export default function Register() {

    const navigate = useNavigate()
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event //extraer los campos
        
        try {
            registerUser(name, email, password)
                .then(() => alert('User Registered'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

        const handleClickLanding = () => navigate('/')



    return (
        <>
            
            <section className="register w-full mx-auto pt-24 px-6 bg-tertiary-color">
            <h1 className='cursor-pointer' onClick={handleClickLanding}>Go to Home</h1>
            <h1>Register User</h1>
                    <div>
                        <h1 className="nav__font text-4xl font-bold text-center pb-8">Create Account</h1>
                        <form className="grid gap-6 w-1/4 mx-auto" onSubmit={register}>
                            <label>
                                <input type="text" className="mt-1 w-full" name="name" placeholder="Name" />
                            </label>
                            <label>
                                <input type="email" className="mt-1 w-full" name="email" placeholder="email" />
                            </label>
                            <label>
                                <input type="password" className="mt-1 w-full" name="password" placeholder="Password" />
                            </label>
                            <button className="w-full bg-transparent hover:bg-indigo-400 text-indigo-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Register User
                                </button>
                        </form>
                    </div>
                </section>
        </>
    )
}