import { retrieveOffer } from '../logic'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import OfferDetailPanel from './OfferDetailPanel'

function OfferDetail() {
    const [offer, setOffer] = useState()
    const [feedback, setFeedback] = useState()
    const { offerId } = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
        try {
            retrieveOffer(offerId, sessionStorage.token)
                .then(offer =>{
                    setOffer(offer)
                    
                })
        } catch (error) {
            setFeedback(error.message)
        }
    }, [])

    return <div className="Offer__detail">
        <a onClick={()=>navigate("/")}>back</a>
        {offer ? <OfferDetailPanel content={offer}/> : <h3>Not found</h3>}
        {feedback ? <p>{feedback}</p> : null}
    </div>
}
export default OfferDetail