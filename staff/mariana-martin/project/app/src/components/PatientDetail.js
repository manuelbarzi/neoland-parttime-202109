import { AiOutlineEdit } from "react-icons/ai"
import {AiOutlineLeft} from 'react-icons/ai'
import { useContext  } from 'react'
import Context from './Context'
import { useParams} from 'react-router-dom'
import { useEffect, useState} from 'react'
import { retrievePatient} from '../logic'
import {  useNavigate } from 'react-router-dom'
import MealPlanSticker from "./MealPlanSticker"



function PatientDetail(){
    
        const { setResponse } = useContext(Context) 

        const [ patient, setPatient ] = useState(null)
        const params = useParams()
        const { patientId } = params
     
        const navigate = useNavigate()

     useEffect(() => {
        try {
            retrievePatient( sessionStorage.token , patientId)
                .then(patient => {
                    setPatient(patient)
                    //.catch(error => setResponse({ level: 'error', message: error.message})) 
                })
        } catch (error) {
            
            setResponse({ level: 'error', message:error.message})
        }
     }, [patientId, setResponse])

     
     const handleGoToEditPatient = patientId => navigate(`/edit/${patientId}`)

     const handleGoToPatientMealPlan = patientId => navigate(`/mealplan/${patientId}`)

   

    return (
        
            <div className="patient-detail">
                <br></br>
            <div onClick={() => navigate("/my-patients")}> <AiOutlineLeft className="back-icon" /> </div>
             <h2> Patient Detail</h2>
            <div onClick={ () => handleGoToEditPatient(patientId) }><AiOutlineEdit /> </div>
            { patient && <>
            <h4> Name: { patient.name }</h4>
            <p> <strong> Id: </strong> { patientId } </p>
            <p> <strong> Email: </strong> { patient.email } </p>  
            <p> <strong> Nutritionist: </strong> { patient.nutritionist } </p>
            <p> <strong> Age: </strong> { patient.age } </p>
            <p> <strong> Weight: </strong> { patient.weight } </p>
            <p> <strong> Height: </strong> { patient.height } </p>
            <p> <strong> Measures: </strong> { patient.measures } </p>
            <p> <strong> Goal: </strong> { patient.goal } </p>
            <p> <strong> Registration Date: </strong> { patient.registrationDate } </p> 
            </> }
            
             {/* hice este div porque no funcionaba el onClick en el compo directo */}
             <div onClick = {() => handleGoToPatientMealPlan(patientId) }>
            <MealPlanSticker  />
            </div>
            
           
            </div>

           

        
    )

}

export default PatientDetail