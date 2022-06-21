
import './styles/AddingMeal.css'
import ModalMeals from './ModalMeals'
import {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'
import { addMealToPlan, retrieveMealPlan} from '../logic'

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
    
                        //debo de recibir el mealPlanId, pero de dónde?
    const handleRetrievePlan = mealPlanId => {
        try {
            retrieveMealPlan(sessionStorage.token, patientId, mealPlanId)
            .then(plans => {
               
                setPlans(plans)
                
            })
        } catch (error) {
            alert(error.message)
        }
    }
 
    

    
    return (
        <div className="adding-meal-container">
            <div onClick={() => navigate(`/mealplan/${patientId}`)}> <AiOutlineLeft className="back-icon" /> </div>

            <p><strong> Day: {day} </strong></p>

            <div>
                <ul>
                    { plans ? plans.map(plan => {
                        return <li key={plan.id}>
                            <p>{plan.id}</p>
                            <p>{plan.patient}</p>
                            <p>{plan.monday}</p>
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