import { retrieveAllMeals } from '../logic'
import { useState, useEffect } from 'react'
import './styles/Modal.css'
import { addMealToPlan } from '../logic'
import { useParams} from 'react-router-dom'

function ModalMeals( { closeModal, day }){

    const [ meals, setMeals ] = useState()

    const params = useParams()
    const { patientId } = params
    const { mealId } = params

    useEffect(() => {
        try {
            retrieveAllMeals(sessionStorage.token)
                 .then(meals => setMeals(meals))
               
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const addingMeal = () => {
        try {
            addMealToPlan(sessionStorage.token, patientId, day, mealId)
            .then(() => console.log('mealplan'))
        } catch (error) {
            alert(error.message)
        }
    }

    const sendMealId = mealId => console.log(mealId)

    return(
        <div className="modal-background">
            <div className="modal-container">
                <p>Select Meal Modal</p>
                <button onClick={ closeModal }>x</button>

            
                <ul>
                    { meals ? meals.map (meal => {
                        return <li key={meal.id} >
                                <p>{meal.title}</p>  
                                <p>{meal.description}</p>  
                                <input type="radio" name="meal" value="meal" onClick={()=> sendMealId(meal.id)}/>   
                                             
                            </li>
                        }): <></>}
                </ul>
                <button onClick={ addingMeal }>Add</button>
            </div>
         
        </div>
    )
}
export default ModalMeals