import { useState, useEffect } from "react"
import DeveloperItem from './DeveloperItem'
import { retrieveAllDevelopers } from '../logic'
import './lists.css'


function DeveloperList ({onItemClick}){
    const [developers, setDevelopers] = useState()
    const [feedback, setFeedback] = useState()

    const clickDeveloper = id => onItemClick(id)

    const getAllDevelopers = () => {
        try {
            retrieveAllDevelopers(sessionStorage.token)
            .then(developers=> setDevelopers(developers))
        } catch (error){
            setFeedback(error.message)
        }
    }

    useEffect(()=>{
        getAllDevelopers()
    }, [])

    return <div className="Developer__list">
         <h2 className='list__title'>DEVELOPERS</h2>

        <ul className='list__container'>
            {developers? developers.map(developer=>{
                return <li className='list__item' key={developer.id} onClick={()=> clickDeveloper(developer.id)} >
                    <DeveloperItem content={developer} />
                </li>
            })
            : <div>
                <h3>Not found</h3>
                {feedback ? <p>{feedback}</p> : null}
            </div>
            }
        </ul>
    </div>
}
export default DeveloperList