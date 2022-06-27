import { useEffect, useState} from 'react'
import { useContext  } from 'react'
import Context from './Context'
import { useParams} from 'react-router-dom'
import { retrievePatient} from '../logic'
import { Route, Routes } from 'react-router-dom'
import PatientWeek from './PatientWeek'
import { useNavigate } from 'react-router-dom'

function PatientHome() {

    const { setResponse } = useContext(Context) 

    const navigate = useNavigate()

    const [ patient, setPatient ] = useState(null)

    const params = useParams()
    const { patientId } = params

    useEffect(() => {
      
        try {
            retrievePatient( sessionStorage.token , patientId)
                .then(patient => {
                
                    setPatient(patient)
                    console.log(patientId)
                })
        } catch (error) {
            
            setResponse({ level: 'error', message:error.message})
        }
     }, [patientId, setResponse])

     const handleGoToPatientPlan = patientId => navigate(`/patient/${patientId}`)

    return(
        <div>
            { patient && <>
            <h4> Name: { patient.name }</h4>
            <p> <strong> Id: </strong> { patient.id } </p>
            <p> <strong> Email: </strong> { patient.email } </p>  
            <p> <strong> Nutritionist: </strong> { patient.nutritionist } </p>
            <p> <strong> Registration Date: </strong> { patient.registrationDate } </p> 
            </> }
           <button onClick={() => handleGoToPatientPlan(patient.id)}> View Meal Plan </button>

            <Routes>
                <Route path="/:patientId" element={ <PatientWeek />}/>
            </Routes>
        </div>
    )
}

export default PatientHome