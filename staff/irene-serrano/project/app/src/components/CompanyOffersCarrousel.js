import { retrieveCompanyOffers } from '../logic'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CompanyOffersCarrouselItem from './CompanyOffersCarrouselItem'
import './Company.css'

function CompanyOffersCarrousel({companyId, companyName}) {
    const [offers, setOffers] = useState()
    const [feedback, setFeedback] = useState()
    const navigate = useNavigate()

    const getCompanyOffers = () => {
        try {
            retrieveCompanyOffers(sessionStorage.token, companyId)
                .then(offers => {
                    setOffers(offers)
                })
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        getCompanyOffers()
    }, [])

    return <div className="CompanyOfferCarrousel">
        <h2 className="CompanyOffersCarrousel__title">{`More ${companyName} offers:`}</h2>
        <ul className="CompanyOfferCarrousel__list">
            {offers ? offers.map(offer => {
                return <li key={offer.id} className="CompanyOfferCarrousel__item" onClick={()=>navigate(`../offer/${offer.id}`)}>
                  <CompanyOffersCarrouselItem content={offer} />
                </li>
            })
            : <h3>Not found :C </h3>}
        </ul>

    </div>
}
export default CompanyOffersCarrousel