import { retrieveDeveloper } from '../logic'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DeveloperDetailPanel from './DeveloperDetailPanel'
import Feedback from './Feedback'

function DeveloperDetail() {
    const [developer, setDeveloper] = useState(null)
    const [feedback, setFeedback] = useState()
    const { developerId } = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
        try {
            retrieveDeveloper(developerId, sessionStorage.token)
                .then(developer =>{
                    developer.active === false? setFeedback({level: 'info', message:'user does not exist'})
                    :
                    setDeveloper(developer)
                    
                })
                .catch(error=>setFeedback({level: 'error', message: error.message}))
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }
    }, [])

    return <div className='Developer__detail'>
        <a onClick={()=>navigate("/candidates")}>back</a>
        {developer ? <DeveloperDetailPanel content={developer}/> : 
        feedback ? <Feedback level={feedback.level} message={feedback.message}/> : null}

    </div>
}
export default DeveloperDetail