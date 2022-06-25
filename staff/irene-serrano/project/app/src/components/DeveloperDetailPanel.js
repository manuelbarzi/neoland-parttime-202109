import { sendContactEmailFromProfile }  from '../logic'
import { useState } from 'react'

function DeveloperDetailPanel({content}) {
    const [contacted, setContacted] = useState(false)

    const sendContactEmail = () => {
        try {
            sendContactEmailFromProfile(content.id, sessionStorage.token)
            .then(()=>{
                setContacted(true)
            })
            .catch((error)=>{
                console.error(error)
            })
        } catch (error) {
            console.error(error)
        }
    }
    return <>
        <h3 className="detail__title">{content.name}</h3>
        <div className="detail__itemGroup">
            <p className="detail__text">{!content.location? <i>Unknown location</i> : content.location}</p>
            <p className="detail__stack">{content.stack}</p>
        </div>
        
        <p className="detail__text">{!content.description? <i>No description...</i> : content.description}</p>
        {content.link? 
        <p className="detail__text">Want to know more about me? Visit my <a  target="_black"  href={content.link}>webpage</a></p>
        : null}

        
      { contacted? <button dissabled="true" className="detail__contactButton-contacted">Contacted ✓</button> 
                 : <button className="detail__contactButton" onClick={sendContactEmail}>Contact</button>}

    </>
}
export default DeveloperDetailPanel