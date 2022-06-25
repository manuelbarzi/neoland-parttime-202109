import { updateEmail } from '../logic'
import { useContext } from 'react'
import Context from './Context'

import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

function UpdateUserEmail({ handleShowChangeEmail }) {
    const { setFeedback } = useContext(Context)

    const goBack = () => {
        handleShowChangeEmail()
    }

    const handleUpdateEmail = event => {
        event.preventDefault()

        const password = event.target.password.value
        const email = event.target.email.value

        try {
            updateEmail(sessionStorage.token, password, email)
                .then(() => {
                    setFeedback({ level: 'info', message: 'Email changed successfully' })
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <form className="updateEmail" onSubmit={handleUpdateEmail}>
        <h3>Change Email</h3>
        <input type="text" name="email" placeholder="email" required />
        <input type="password" name="password" placeholder="password" required />
        <div>
            <button onClick={goBack}>Back</button>
            <button type='submit'>Modify Email</button>
        </div>
    </form>

}

export default UpdateUserEmail