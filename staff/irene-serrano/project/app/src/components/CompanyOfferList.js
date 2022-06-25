
import "./offerManager.css"
import { useState, useEffect } from "react"
import { retrieveCompany, retrieveCompanyOffers } from '../logic'
import CompanyOfferItem from './CompanyOfferItem'
import Feedback from "./Feedback"

function CompanyOfferList() {


    const [offers, setOffers] = useState()
    const [feedback, setFeedback] = useState()

    const getCompanyOffers = () => {
        try {
            retrieveCompany(sessionStorage.token)
                .then(company => {
                    const userId = company.id
                    retrieveCompanyOffers(sessionStorage.token, userId)
                        .then(offers => {
                            setOffers(offers)
                        })
                        .catch(error =>  setFeedback({level: 'info', message: error.message}))
                })
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }
    }
    useEffect(() => {
        getCompanyOffers()
    }, [])

    return <div className="CompanyOffer__list">
        <h2 className="CompanyOffers__title">My offers</h2>

        {feedback? <Feedback level={feedback.level} message={feedback.message}/> :

        offers ? offers.map(offer => {
          return  !offer? setFeedback({level: 'info', message: 'not found any offer from company'}) :
             <li key={offer.id}>
                <CompanyOfferItem content={offer} onDeleteItem={() => getCompanyOffers()} />
            </li>
        })
              : null}

    </div>
}
export default CompanyOfferList