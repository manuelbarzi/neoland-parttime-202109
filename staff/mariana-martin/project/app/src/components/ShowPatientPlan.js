import { useState, useEffect } from 'react'
import { retrievePatientMealsList } from '../logic'
import { retrievePlanFromPatient } from '../logic'
import { useParams, useNavigate } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'

function ShowPatientPlan({ id }) {
    //const patientId = id

    const navigate = useNavigate()

    const { day } = useParams()


    const [plans, setPlans] = useState()

    const showPlan = () => {
        try {
            retrievePlanFromPatient(sessionStorage.token)
                .then(plans => {
                    //let planId = plans._id 
                    const dayMeals = plans[day]//comidas del día 

                    retrievePatientMealsList(sessionStorage.token)
                        .then(meals => { //recibo todas las de base
                            let planMeals = meals.filter(meal => { //filtro las del patient
                                return dayMeals.find(dayMeal => meal.id === dayMeal)
                            })
                            setPlans(planMeals) //seteo en estado
                        })

                })
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        showPlan()
    }, [])

    return (
        <div>
            <div onClick={() => navigate("/")}> <AiOutlineLeft className="back-icon" /> </div>
            <p><strong> Day: {day} </strong></p>
            <ul>
                {plans ? plans.map(plan => {
                    return <li key={plan.id}>

                        <p><strong> Meal: </strong>{plan.title}</p>
                        <p>{plan.description}</p>
                    </li>
                }) : <p>no meals </p>}
            </ul>
        </div>
    )
}

export default ShowPatientPlan