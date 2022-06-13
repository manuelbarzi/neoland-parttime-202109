import '../components/styles/MealPlan.css'
import { useEffect, useState } from "react"

import { retrievePatient } from "../src/logic"
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../src/components/Context'
import Day from '../src/components/Day'



function MealPlan(  ) {

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
 
   
     const addMeal = () => {
        console.log('agregar')
     }

     
    return (
        <div>
        <h3>Meal Plan</h3>
        <p><strong>Paciente: {name} </strong></p>

        <br></br>

            <div className="days-container">
            <div onClick={ addMeal } className="day"><Day day="Monday" /> </div>
            <div className="day"><Day day="Tuesday" /> </div>
            <div className="day"><Day day="Wednesday" /> </div>
            <div className="day"><Day day="Thursday" /> </div>
            <div className="day"><Day day="Friday" /> </div>
            <div className="day"><Day day="Saturday"/> </div>
            <div className="day"><Day day="Sunday"/> </div>

       
        </div>
        </div>
    )
}
export default MealPlan