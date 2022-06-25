import './Company.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { retrieveCompanyFromOffer } from '../logic'
import  CompanyOffersCarrousel  from './CompanyOffersCarrousel'

function CompanyOfferProfile({ }) {
    const navigate = useNavigate()
    const { companyId } = useParams()
    const [company, setCompany] = useState()
    const [feedback, setFeedback] = useState()
    const getCompany = () => {
        try {
            retrieveCompanyFromOffer(companyId)
                .then((company) => {
                    setCompany(company)
                })
        } catch (error) {
            setFeedback(error)
        }
    }

    useEffect(() => {
        getCompany()
    }, [])

    return <div className="OfferCompany">
        <a onClick={()=> navigate('../')}>Home </a>
        {company ?
            <>
                <h3 className="OfferCompany__title">{company.name}</h3>
                <p className="OfferCompany__text">{company.description}</p>
                <p className="OfferCompany__text">Want to know more about us? Visit <a target="_black" href={company.link}>{company.name}</a> web page.</p>

                <CompanyOffersCarrousel companyId={company.id} companyName={company.name}/>
            </> 
        : null}

    </div> 
}
export default CompanyOfferProfile