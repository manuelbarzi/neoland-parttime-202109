import { useState, useEffect } from 'react'
import {retrieveAllMeals} from '../logic'
import {retrievePlanFromPatient} from '../logic'
import { useParams } from 'react-router-dom'


function ShowPatientPlan( {id}){
    const patientId = id

 const {day} =useParams()


  const  [plans, setPlans] = useState()

    const showPlan = () => {
        try {
            retrievePlanFromPatient(sessionStorage.token)
            .then(plans => { 
               //let planId = plans._id 
                const dayMeals = plans[day]//comidas del día 
                setPlans(dayMeals)
                console.log(dayMeals)

                // retrieveAllMeals(sessionStorage.token)
                // .then(meals => { //recibo todas las de base
                //     let planMeals = meals.filter(meal =>{ //filtro las del patient
                //         return dayMeals.find(dayMeal => meal.id === dayMeal) 
                //     })
                //     setPlans(planMeals) //seteo en estado
                // })
                
            })
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
       showPlan()
         }, [])

    return(
        <div>
            <ul>
                {plans ? plans.map(dayMeal => {
                return <li key={dayMeal}>
                    
                   <p>{dayMeal}</p>
                </li>
            }): <p>no meals </p>}
            </ul>
        </div>
    )
}

export default ShowPatientPlan