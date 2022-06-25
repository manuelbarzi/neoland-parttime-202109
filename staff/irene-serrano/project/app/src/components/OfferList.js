import './lists.css'
import { useState, useEffect } from "react"
import OfferItem from './OfferItem'
import Feedback from './Feedback'
import { retrieveAllOffers } from '../logic'


function OfferList({ onItemClick }) {
    const [offers, setOffers] = useState()
    const [feedback, setFeedback] = useState()

    const clickOffer = id => onItemClick(id)

    const getAllOffers = () => {
        try {
            retrieveAllOffers(sessionStorage.token)
                .then(offers => setOffers(offers))
                .catch(error=>{
                    setFeedback({level: 'error', message: error.message})
                })
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }
    }
    useEffect(() => {
        getAllOffers()
    }, [])

    return <div className="Offer__list">
        <h2 className='list__title'>OFFERS</h2>

        <ul className='list__container'>
            {offers ? offers.map(offer => {
                if (offer.active === true) {
                    return <li className="list__item" key={offer.id} onClick={() => clickOffer(offer.id)} >
                        <OfferItem content={offer} />
                    </li>
                }
                else return null

            })
                : <div>
                   
                    {feedback ? <Feedback level={feedback.level} message={feedback.message} />: null}
                </div>
            }
        </ul>
    </div>
}
export default OfferList