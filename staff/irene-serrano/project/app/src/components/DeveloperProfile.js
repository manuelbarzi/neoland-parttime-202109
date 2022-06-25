import './profileManager.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveDeveloperFromProfile, updateDeveloper, unregisterDeveloper } from '../logic'
import Modal from './Modal'
import Feedback from './Feedback'
import ConfirmDeleteUser from './modals/ConfirmDeleteUser'

export default function ({ onDeveloperDeleted }) {
    const navigate = useNavigate()
    const [developer, setDeveloper] = useState()
    const [feedback, setFeedback] = useState()
    const [modal, setModal] = useState()
    

    useEffect(() => {
        try {
            retrieveDeveloperFromProfile(sessionStorage.token)
                .then((developer) => setDeveloper(developer))
        }
        catch (error) { setFeedback({ level: 'error', message: error.message }) }
    }, [modal])

    const saveDeveloper = (event) => {
        event.preventDefault()

        const { target:
            { name: { value: name },
                description: { value: description },
                stack: { value: stack },
                location: { value: location },
                link: { value: link }
            } } = event

        try {
            updateDeveloper(sessionStorage.token, name, description, stack, location, link)
                .then(() => setFeedback({ level: 'success', message: 'updated developer' }))
                .catch((error)=>{
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const unregister = () => {
        try {
            unregisterDeveloper(sessionStorage.token)
                .then(onDeveloperDeleted)
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }
    }
    const handleOpenModal = () => {
        setModal(true)
    }
    const handleCloseModal = () => {
        setModal(false)
    }
    const handleDeleteDeveloper =() => {
        unregister()
    }

    return <div className="Developer__profileManager">
        <a onClick={() => navigate("/")}>back</a>
        {developer ?
            <>
                <h2 className="profileManager__title">{developer.name}</h2>
                <form className="profileManager__form" onSubmit={saveDeveloper}>

                    <label htmlFor="name" >Name</label>
                    <input id="name" className="profileManager__input" type="text" name="name" defaultValue={developer.name} />

                    <label htmlFor="description" >Description</label>
                    <textarea id="description" className="profileManager__input" type="text" name="description" defaultValue={developer.description} />

                    <label htmlFor="stack" >Stack</label>
                    <select id="stack" className="profileManager__input" name="stack" defaultValue={developer.stack}>
                        <option disabled > -- choose your stack -- </option>
                        <option value="full-stack">Full stack</option>
                        <option value="front-end">Front end</option>
                        <option value="back-end">Back end</option>
                    </select>

                    <label htmlFor="location" >Location</label>
                    <input id="location" className="profileManager__input" type="text" name="location" defaultValue={developer.location ? developer.location : ""} placeholder="location" />

                    <label htmlFor="link" >Link</label>
                    <input id="link" className="profileManager__input" type="text" name="link" defaultValue={developer.link ? developer.link : ""} placeholder="link" />

                    {feedback ? <Feedback level={feedback.level} message={feedback.message} /> : null}
                    <button className="profileManager__submitButton" type="submit">Save</button>

                </form>

                <button className="profileManager__deleteButton" onClick={(e) => {
                    e.preventDefault()
                    handleOpenModal(window.scrollY)}}>
                    Delete User
                </button>
            </>
            : <h3>not found </h3>}
           

        {modal && (
            <Modal
                content={
                    <ConfirmDeleteUser
                        onDeleted={handleDeleteDeveloper}
                        onCancel={handleCloseModal}
                    />
                }
                onClose={handleCloseModal}
               
            />
        )}
    </div>
}