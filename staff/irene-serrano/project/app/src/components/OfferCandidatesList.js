import { useState } from 'react'
import OfferCandidatesItem from './OfferCandidatesItem'
import './candidates.css'

export default function ({ requests, offerId }) {
    const [candidates, setCandidates] = useState(requests)

    return <>
        {candidates?  <ul className='OfferCandidatesList'>
           { candidates.length > 0 ?
            (candidates.map(candidate=>{
                 return <li key={candidate.developer} className='OfferCandidatesListItem' >
                    <OfferCandidatesItem requestId={candidate._id} offerId={offerId} />
                </li>
                })
            )
            : <h3 className="OfferCandidates__NotFound">Ups! No one has applied for this offer yet</h3>  }
        
        </ul> :  null }
    </>
}
