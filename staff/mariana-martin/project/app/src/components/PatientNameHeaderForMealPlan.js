import '../components/styles/MealPlan.css'
import { useEffect, useState } from "react"

import { retrievePatient } from "../logic"
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import Context from './Context'




function PatientNameHeaderForMealPlan(  ) {

    const params = useParams()
    const { patientId } = params
  
    const { setResponse } = useContext(Context) 


    const [ name, setName ] = useState()

    useEffect(() => {
        try {
            retrievePatient( sessionStorage.token , patientId)
                .then(patient => {
                   const {name } = patient

                   setName(name)
                })
        } catch (error) {
            
            setResponse({ level: 'error', message:error.message})
        }
     }, [patientId, setResponse])
 
   
     
    return (
        <div>
        <h3>Meal Plan</h3>
        <p><strong>Paciente: {name} </strong></p>
        </div>
    )
}
export default PatientNameHeaderForMealPlan