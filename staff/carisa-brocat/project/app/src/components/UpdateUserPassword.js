import { updatePassword } from '../logic'
import { useContext } from 'react'
import Context from './Context'

import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

function UpdateUserPassword({ handleShowChangePassword }) {
    const { setFeedback } = useContext(Context)

    const goBack = () => {
        handleShowChangePassword()
    }

    const handleUpdatePassword = event => {
        event.preventDefault()

        const oldPassword = event.target.oldPassword.value
        const newPassword = event.target.newPassword.value

        try {
            updatePassword(sessionStorage.token, oldPassword, newPassword)
                .then(() => {
                    setFeedback({ level: 'info', message: 'Password changed successfully' })
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <form className="updatePassword" onSubmit={handleUpdatePassword}>
        <h3>Change Password</h3>
        <input type="password" name="oldPassword" placeholder="current password" required />
        <input type="password" name="newPassword" placeholder="new password" required />
        <div>
            <button onClick={goBack}>Back</button>
            <button type='submit'>Modify Password</button>
        </div>
    </form>
}

export default UpdateUserPassword