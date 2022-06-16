import { Link } from 'react-router-dom'
import { deleteUser } from '../logic'

function Unregister({ onRegistered }) {

    
    const handleDeleteUser = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            deleteUser(sessionStorage.token, password)
                .then()
                .catch(error => {

                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <form className="unregister" onSubmit={handleDeleteUser} >
        <input type="password" name="password" placeholder="password" required />
        <button type="submit">Delete</button>
    </form>
}

export default Unregister