import './Unregister.css'
import Modal from './Modal'
import { useState } from 'react'
import { deleteUser } from '../logic'
import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

function Unregister({ logOut }) {
    const [modalOpen, setModalOpen] = useState(false)

    const unregisterConfirmation = () => {

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
                    if (error instanceof NotFoundError && error.message.includes('user') && error.message.includes('not found'))
                        delete sessionStorage.token

                    if (error instanceof AuthError)
                        delete sessionStorage.token

                    alert(error.message)
                })
        } catch (error) {
            if (error instanceof AuthError)
                delete sessionStorage.token

            alert(error.message)
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
            <button type="submit">Delete</button>
        </div>} />}
    </form>



}

export default Unregister