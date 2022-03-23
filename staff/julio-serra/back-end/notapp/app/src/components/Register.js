import { registerUser } from '../logic'

function Register() {

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


    return <form className="grid grid-cols-1 gap-6 justify-center flex w-1/4 mx-auto mt-20" onSubmit={register}>
        <label>
            <input type="text" class="mt-1 w-full" name="name" placeholder="name" />
        </label>  
        <label>
            <input type="email" class="mt-1 w-full" name="email" placeholder="email" />
        </label>      
        <label>
            <input type="password" class="mt-1 w-full" name="password" placeholder="password" />
        </label>        
        <button className='w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Submit</button>
    </form>
}

export default Register