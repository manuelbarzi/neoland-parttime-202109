import { AiOutlineEdit } from "react-icons/ai"

import { useContext  } from 'react'
import Context from './Context'
import { useParams} from 'react-router-dom'
import { useEffect, useState} from 'react'
import { retrievePatient} from '../logic'



function PatientDetail(){
    
        const { setResponse } = useContext(Context) 

        const [ patient, setPatient] = useState(null)
        const params = useParams()
        const { patientId } = params

        
     useEffect(() => {
        try {
            retrievePatient( sessionStorage.token , patientId)
                .then(patient => {
                    setPatient(patient)
                    //.catch(error => setResponse({ level: 'error', message: error.message})) 
                })
        } catch (error) {
            debugger
            setResponse({ level: 'error', message:error.message})
        }
     }, [patientId, setResponse])

    return (
        
            <div className="patient-detail">
            <h2> compo de Patient</h2>
            <div><AiOutlineEdit /> </div>
            {patient && <>
            <h4> Name: { patient.name }</h4>
            <p> <strong> Id: </strong> { patient.id } </p>
            <p> <strong> Email: </strong> { patient.email } </p>  
            <p> <strong> Nutritionist: </strong> { patient.nutritionist } </p>
            <p> <strong> Age: </strong> { patient.age } </p>
            <p> <strong> Weight: </strong> { patient.weight } </p>
            <p> <strong> Height: </strong> { patient.height } </p>
            <p> <strong> Measures: </strong> { patient.measures } </p>
            <p> <strong> Goal: </strong> { patient.goal } </p>
            <p> <strong> Registration Date: </strong> { patient.registrationDate } </p> 
            </>}
            </div>

        
    )

}

export default PatientDetail