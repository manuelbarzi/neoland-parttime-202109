import "./offerManager.css"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { activateOffer, deactivateOffer, deleteOffer } from "../logic"

import OfferCandidatesList from "./OfferCandidatesList"
import Modal from "./Modal"
import ConfirmDeleteOffer from "./modals/ConfirmDeleteOffer"
import Feedback from "./Feedback"

export default function ({ content, onDeleteItem }) {
    const offer = content
    const date = offer.publicationDate

    const [active, setActive] = useState(offer.active)
    const [showCandidates, setShowCandidates] = useState(false)
    const [modal, setModal] = useState(false)
    const [feedback,setFeedback] = useState()

    const navigate = useNavigate()
  

    function formatDate() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"]
        const day = date.substr(8, 2)
        const month = date.substr(5, 2)
        const year = date.substr(0, 4)
        const hour = date.substr(11, 5)

        return `${day} ${months[month - 1]} ${year}, ${hour}`
    }

    function deactivate() {
        try {
            deactivateOffer(sessionStorage.token, offer.id)
                .then(() => setActive(false))
        } catch (error) {
            console.error(error)
        }
    }

    function activate() {
        try {
            activateOffer(sessionStorage.token, offer.id)
                .then(() => setActive(true))
        } catch (error) {
            console.error(error)
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
                        setFeedback(null)
                        onDeleteItem()
                    }, 3000)
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }
    const formatedDate = formatDate(date)
    const offerId = offer.id

    return <div className={(active === true ? "CompanyOffer__item CompanyOffer__item-active" : "CompanyOffer__item CompanyOffer__item-inactive")}>
        <h3 className="item__title" onClick={() => navigate(`/my-offers/edit/${offerId}`)}>{offer.title}</h3>
        <p className="item__text">Created on: {formatedDate}</p>

        <div className="item__buttonGroup">
            <button onClick={() => navigate(`/my-offers/edit/${offerId}`)}>🖋️ </button>
            {active === true ?
                <button onClick={() => deactivate()}>🔇</button>
                :
                <button onClick={() => activate()}>🔈</button>}
            <button onClick={handleOpenModal}>🗑️</button>
        </div>
        {feedback ? <Feedback level={feedback.level} message={feedback.message} /> : null}
        <div className="item__candidatesContainer">
            {showCandidates ?
                <a onClick={() => setShowCandidates(false)}>Hide candidates △</a> :
                <a onClick={() => setShowCandidates(true)}>See candidates ▽</a>}

            {showCandidates ? (
                    <OfferCandidatesList requests={offer.requests} offerId={offer.id} />        
            )
                : null }
        </div>
        
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