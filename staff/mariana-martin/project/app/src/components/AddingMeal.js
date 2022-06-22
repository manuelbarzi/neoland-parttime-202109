
import './styles/AddingMeal.css'
import ModalMeals from './ModalMeals'
import {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'
import { addMealToPlan, retrieveMealPlan, retrieveAllMeals} from '../logic'

function AddingMeal() {

 
    const { day } = useParams()
    const { patientId } = useParams()
  

    
    const [ modal, setModal ] = useState(false)

    const [ plans, setPlans ] = useState(null)


    const navigate = useNavigate()


    const openModal = () => {
        setModal(true)
        navigate(`meal`)
    }

    const closeModal = () => {
        setModal(false)
    }

    
    const handleAddMeal = () => {
        console.log(mealId)
        
        try {
            addMealToPlan(sessionStorage.token, patientId, day, mealId )
           .then(() => console.log(plans))
           //.then(() => console.log('creado'))
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const onSelectedMeal = id => { // lo recibo de ModalList
        mealId = id 
    }
    let mealId;  // guardo el id del meal lo uso en la lógica

    
   
    useEffect(() => {
        handleRetrievePlan()
         }, [])
    
                        
    const handleRetrievePlan = () => {

        try {
            retrieveMealPlan(sessionStorage.token, patientId)
            .then(plans => { //comidas de todos los días
                let planId = plans._id 
                let dayMeals = plans[day]//comidas del día 
                
                retrieveAllMeals(sessionStorage.token)
                .then(meals => { //recibo todas las de base
                    let planMeals = meals.filter(meal =>{ //filtro las del patient
                        return dayMeals.find(dayMeal => meal.id === dayMeal) 
                    })

                    setPlans(planMeals) //steo en estado
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }
 
    
                    //plans Y el plan tiene un elemento por que está null, si no array vacio
    
    return (
        <div className="adding-meal-container">
            <div onClick={() => navigate(`/mealplan/${patientId}`)}> <AiOutlineLeft className="back-icon" /> </div>

            <p><strong> Day: {day} </strong></p>

            <div>
                <ul> 
                    { (plans && plans.length) ? plans.map(plan => {
                        return <li key={plan.id}>
                            <p>{plan.title}</p>
                            <p>{plan.description}</p>
                            <p>{plan.id}</p>                            
                        </li>
                    }): <p>No plans yet</p>}
                </ul>
            </div>

            <p> Breakfast  </p>
            <br></br>
            <button onClick={ openModal }> Select Meal </button>
        
            <p> Snack </p>
            <br></br>
            <button onClick={ openModal }> Select Meal </button>

            <p> Lunch </p>
            <br></br>
            <button onClick={ openModal }> Select Meal </button>

            <p> Snack </p>
            <br></br>
            <button onClick={ openModal }> Select Meal </button>

            <p> Dinner </p>
            <br></br>
            <button onClick={ openModal }> Select Meal </button>

            <Routes>
                <Route path="meal/*" element= { modal ? <ModalMeals closeModal={ closeModal } onAddMeal={handleAddMeal} onSelectedMeal={onSelectedMeal}/> : <></>} />
            </Routes>     
         
        </div>
    )
}

export default AddingMeal