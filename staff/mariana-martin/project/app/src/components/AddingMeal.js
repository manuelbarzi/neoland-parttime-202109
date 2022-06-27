import { AiOutlineCloseCircle } from "react-icons/ai"
import './styles/AddingMeal.css'
import ModalMeals from './ModalMeals'
import {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'
import { addMealToPlan, retrieveMealPlan, retrieveAllMeals, removeMealFromPlan} from '../logic'
import { useContext  } from 'react'
import Context from  './Context'

function AddingMeal() {

    const { setResponse } = useContext(Context)

    const { day } = useParams()
    const { patientId } = useParams()
  

    
    const [ modal, setModal ] = useState(false)

    const [ plans, setPlans ] = useState([])


    const navigate = useNavigate()


    const openModal = () => {
        setModal(true)
        navigate(`meal`)
    }

    const handleCloseModal = () => {
        handleRetrievePlan()
        setModal(false)
    }

    //*AÑADO MEAL AL PLAN
    const handleAddMeal = () => {
        console.log(mealId)
        try {
            addMealToPlan(sessionStorage.token, patientId, day, mealId )
            .then(() => {
                setResponse({ level: 'info', message: 'Added Meal'})
            })
            handleRetrievePlan()
            handleCloseModal()
        } catch (error) {
            alert(error.message)
        }
    }

    const onSelectedMeal = id => { // lo recibo de ModalList
        mealId = id  // guardo el id del meal lo uso en la lógica
    }
    let mealId;  

    
    //*1 .- RECUPERO PLAN
    
    const handleRetrievePlan = () => {
        
        try {
            retrieveMealPlan(sessionStorage.token, patientId)
            .then(plans => { //comidas de todos los días
               // let planId = plans._id 
               
                let dayMeals = plans[day]//comidas del día 
                
                retrieveAllMeals(sessionStorage.token)
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
        handleRetrievePlan()
         }, [])


    //*REMOVE MEAL FROM PLAN y REFRESCO:
    const onRemoveMeal= mealId => {
        try {
            removeMealFromPlan(sessionStorage.token, patientId, day, mealId )
            .then(() => handleRetrievePlan())
            .then(() => {
                setResponse({ level: 'info', message: 'Deleted Meal'})
            })
        } catch (error) {
            alert(error.message)
        }
    }
 
    
                    //plans Y el plan.length tiene un elemento por que está null, si no array vacío
    
    return (
        <div className="adding-meal-container">
            <div onClick={() => navigate(`/mealplan/${patientId}`)}> <AiOutlineLeft className="back-icon" /> </div>

            <p><strong> Day: {day} </strong></p>
            <br></br>
            <button className="select-meal-button" onClick={ openModal }> Select Meal </button>
            <div>
                <ul> 
                    
                    { (plans && plans.length) ? plans.map(plan => {
                        return <li key={plan.id}>
                            <div onClick={ () => onRemoveMeal(plan.id)}><AiOutlineCloseCircle className="delete-icon" /></div> 
                            <p><strong> Meal: </strong>{plan.title}</p>
                            <p>{plan.description}</p>
                            <p>{plan.id}</p>     
                                                  
                        </li>
                    }): <p>No meals added, please add one </p>}
                   
                </ul>
            </div>

           

            <Routes>
                <Route path="meal/*" element= { modal ? <ModalMeals  onCloseModal={handleCloseModal} onAddMeal={handleAddMeal} onSelectedMeal={onSelectedMeal}/> : <></>} />
            </Routes>     
         
        </div>
    )
}

export default AddingMeal