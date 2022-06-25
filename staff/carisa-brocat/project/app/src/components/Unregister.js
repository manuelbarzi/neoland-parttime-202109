import './Unregister.css'
import Modal from './Modal'
import { useState } from 'react'
import { deleteUser } from '../logic'
import { useContext } from 'react'
import Context from './Context'

import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

function Unregister({ logOut }) {
    const { setFeedback } = useContext(Context)
    const [modalOpen, setModalOpen] = useState(false)

    const unregisterConfirmation = event => {
        event.preventDefault()

        setModalOpen(true)
    }

    const handleDeleteUser = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            deleteUser(sessionStorage.token, password)
                .then(() => {
                    setModalOpen(false)

                    logOut()
                })
                .catch(error => {
                    setModalOpen(false)

                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setModalOpen(false)

            setFeedback({ level: 'error', message: error.message })
        }
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    return <form className="unregister" onSubmit={handleDeleteUser} >
        <input type="password" name="password" placeholder="password" required />
        <button onClick={unregisterConfirmation}>Delete</button>

        {modalOpen && <Modal handleCloseModal={handleCloseModal} content={<div className="unregister__confirmation" >
            <p>Are you sure do you want to delete your account? </p>
            <button type="submit">Yes</button>
        </div>} />}
    </form>
}

export default Unregister