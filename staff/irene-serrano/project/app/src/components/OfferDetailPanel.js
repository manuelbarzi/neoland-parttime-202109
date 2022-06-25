import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { addOfferRequest, retrieveDeveloperFromProfile } from '../logic'


function OfferDetailPanel({ content }) {
    const [applied, setApplied ] = useState(false)
    const navigate = useNavigate()

    const developerHasApplied = () => {
        try {
            retrieveDeveloperFromProfile(sessionStorage.token)
            .then(developer=>{
                const {requests} = content
                const requestIndex =  requests.findIndex((request)=> request.developer === developer.id)
                if(requestIndex !== -1 ) setApplied(true)
            })
        } catch (error) {
            console.error(error)
        }      
    }
    useEffect(()=>{
        developerHasApplied()
    }, [])



    const handleApply = () => {
        try {
            addOfferRequest(content.id, sessionStorage.token)
            .then(()=>setApplied(true))
        } catch (error) {
            console.error(error)
        }
    }


    return <>
        <h3 className="detail__title">{content.title}</h3>

        <div className="detail__itemGroup">
            <div className="detail__itemSubgroup">
                <p className="detail__text">{content.location}</p>
            </div>
            <div className="detail__itemSubgroup">
                <p className="detail__stack ">{content.stack}</p>
                <p className="detail__text">{content.minSalary}-{content.maxSalary}€</p>           
            </div>
        </div>

        <p className="detail__description">{content.description}</p>
        {applied? <button dissabled="true" className="detail__contactButton-applied">Applied ✓</button>
        : <button onClick={handleApply}className="detail__contactButton">Apply</button>}

        <p className="detail__text">Offer published by <a onClick={()=>{navigate(`/offer/owner/${content.companyId}`)}}>{content.companyName}</a></p>
     
    </>
}
export default OfferDetailPanel