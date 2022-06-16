import { retrieveAllMeals } from '../logic'
import { useState, useEffect } from 'react'
import './styles/Modal.css'
import { addMealToPlan } from '../logic'
import { useParams} from 'react-router-dom'



function ModalMeals( { closeModal, onSelectedMeal }){

    const [ meals, setMeals ] = useState()

   
    const { patientId } = useParams()
    const { mealId } = useParams()
    const { day } = useParams()

  
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
            .then(() => console.log('creado'))
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    

    // const handleClickOnContent = event => {
    //     event.stopPropagation() //hace que no siga al padre
    // }

    return(
        <div className="modal-background"  >
            <div className="modal-container">
                <p> Select Meal Modal </p>
                <p>{day}</p>
                <button onClick={ closeModal }>x</button>

            
                <ul>
                    { meals ? meals.map (meal => {
                        return <li key={meal.id} >
                                <p>{meal.title}</p>  
                                <p>{meal.description}</p>  
                                <input type="radio" name="meal" value="meal"  onClick={()=> onSelectedMeal(meal.id)}/>   
                                             
                            </li>
                        }): <></>}
                </ul>
                <button onClick={ addingMeal }>Add</button>
            </div>
         
        </div>
    )
}
export default ModalMeals