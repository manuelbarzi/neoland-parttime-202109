import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveCompany, updateCompany, unregisterCompany } from '../logic'
import Modal from './Modal'
import Feedback from './Feedback'
import ConfirmDeleteUser from './modals/ConfirmDeleteUser'

export default function ({ onCompanyDeleted }) {
    const navigate = useNavigate()
    const [company, setCompany] = useState()
    const [feedback, setFeedback] = useState()
    const [modal, setModal] = useState()

    useEffect(() => {
        try {
            retrieveCompany(sessionStorage.token)
                .then((company) => setCompany(company))
        }
        catch (error) { setFeedback({ level: 'error', message: error.message }) }
    }, [])

    const saveCompany = (event) => {
        event.preventDefault()

        const { target:
            { name: { value: name },
                description: { value: description },
                location: { value: location },
                link: { value: link }
            } } = event

        try {
            updateCompany(sessionStorage.token, name, description, location, link)
                .then(() => setFeedback({ level: 'success', message: 'updated company' }))
                .catch(error=>setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const unregister = () => {
        try {
            unregisterCompany(sessionStorage.token)
                .then(onCompanyDeleted)
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
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

    return <div className="Company__profileManager">
        <a onClick={() => navigate("/")}>back</a>
        {company ?
            <>
                <h2 className="profileManager__title">{company.name}</h2>
                <form className="profileManager__form" onSubmit={saveCompany}>
                    <label htmlFor="name" >Name</label>
                    <input id="name" className="profileManager__input" type="text" name="name" defaultValue={company.name} />

                    <label htmlFor="description" >Description</label>
                    <textarea id="description" className="profileManager__input" type="text" name="description" defaultValue={company.description}  />

                    <label htmlFor="location" >Location</label>
                    <input id="location" className="profileManager__input" type="text" name="location" defaultValue={company.location ? company.location : ""} placeholder="location" />

                    <label htmlFor="link" >Link</label>
                    <input id="link" className="profileManager__input" type="text" name="link" defaultValue={company.link ? company.link : ""} placeholder="link" />

                    {feedback ? <Feedback level={feedback.level} message={feedback.message} /> : null}

                    <button className="profileManager__submitButton" type="submit">Save</button>

                </form>

                <button className="profileManager__deleteButton" onClick={(() => handleOpenModal())}>
                    Delete User
                </button>
            </>
            : <h3>not found</h3>}

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