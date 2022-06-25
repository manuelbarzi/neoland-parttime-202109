import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { retrieveOffer, updateOffer, deleteOffer } from "../logic"
import Feedback from "./Feedback"
import Modal from './Modal'
import ConfirmDeleteOffer from './modals/ConfirmDeleteOffer'

export default function ({}) {
    const { offerId } = useParams()
    const [offer, setOffer] = useState()
    const [feedback, setFeedback] = useState()
    const navigate = useNavigate()
    const [modal, setModal] = useState()


    useEffect(() => {
        try {
            retrieveOffer(offerId, sessionStorage.token)
                .then((offer) => setOffer(offer))
        }
        catch (error) { console.error(error) }
    }, [])


    const saveOffer = (event) => {
        event.preventDefault()
        const { target:
            {
                title: { value: title },
                description: { value: description },
                stack: { value: stack },
                minSalary: { value: minSalary },
                maxSalary: { value: maxSalary },
                location: { value: location }
            } } = event

        try {
            updateOffer(sessionStorage.token, offerId, title, description, stack, parseInt(minSalary), parseInt(maxSalary), location)
                .then(() => setFeedback({ level: 'success', message: 'Updated offer' }))
                .catch(error => { setFeedback({ level: 'error', message: error.message }) })
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

    const handleDeleteOffer = () => {
        try {
            deleteOffer(sessionStorage.token, offerId)
                .then(() => {
                    setModal(false)
                    setFeedback({ level: 'info', message: 'Offer deleted' }) 
                    setTimeout(() => {
                        navigate('/my-offers')
                    }, 3000)

                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div className="EditOffer">

        <a onClick={() => navigate("/my-offers")}>back</a>
        {offer ?
            <>
                <h2 className="EditOffer__title">{offer.title}</h2>
                <form className="EditOffer__form" onSubmit={saveOffer}>
                    <label htmlFor="title" >Title</label>
                    <input id="title" className="EditOffer__input" type="text" name="title" defaultValue={offer.title} />

                    <label htmlFor="description" >Description</label>
                    <textarea id="description" className="EditOffer__input" type="text" name="description" defaultValue={offer.description} />

                    <label htmlFor="stack" >Stack</label>
                    <select id="stack" className="EditOffer__input" name="stack" defaultValue={offer.stack}>
                        <option value="full-stack" > Full stack </option>
                        <option value="front-end" >Front end</option>
                        <option value="back-end" >Back end</option>
                    </select>

                    <label htmlFor="minSalary" >Minimun salary</label>
                    <input id="minSalary" className="EditOffer__input" type="number" min="100" name="minSalary" defaultValue={offer.minSalary} />

                    <label htmlFor="maxSalary" >Maximum salary</label>
                    <input id="maxSalary" className="EditOffer__input" type="number" min="100" name="maxSalary" defaultValue={offer.maxSalary} />

                    <label htmlFor="location" >Location</label>
                    <input id="location" className="EditOffer__input" type="text" name="location" defaultValue={offer.location} />
                    {feedback ? <Feedback level={feedback.level} message={feedback.message} /> : null}
                    <button className="EditOffer__submitButton" type="submit">Save</button>

                </form>

                <button className="EditOffer__deleteButton" 
                onClick={(e) => {
                    e.preventDefault()
                    handleOpenModal()}}>
                    Delete offer
                </button>
            </>

            : <h1>Offer not found</h1>}

        {modal && (
            <Modal
                content={
                    <ConfirmDeleteOffer
                        onDeleted={handleDeleteOffer}
                        onCancel={handleCloseModal}
                    />
                }
                onClose={handleCloseModal}

            />
        )}
    </div>


}