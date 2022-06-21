import { retrieveAllMeals } from '../logic'
import { useState, useEffect } from 'react'
import './styles/Modal.css'
import { addMealToPlan } from '../logic'
import { useParams} from 'react-router-dom'
import ModalListMeal from './ModalListMeal'



function ModalMeals( { closeModal  }){

    const [ meals, setMeals ] = useState()

  
   
    const { patientId } = useParams()
   
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
        console.log(mealId)
        try {
            addMealToPlan(sessionStorage.token, patientId, day, mealId )
            .then(() => console.log('creado'))
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

        

        const onSelectedMeal = id => {
          mealId = id //lo uso aquí  
      }
      let mealId;  //guardo el id del meal 
    
    return(
        <div className="modal-background"  >
            <div className="modal-container">
                <p> Select Meal Modal </p>
                <p>{day}</p>
                <button onClick={ closeModal }>x</button>
                
                <ul>
                    { meals ? meals.map (meal => {
                        return <li key={meal.id} >
                               <ModalListMeal meal={meal} onSelectedMeal={onSelectedMeal} />
                            </li>
                        }): <></>}
                </ul>
                <button onClick={ addingMeal }> Add </button>
            </div>
         
        </div>
    )
}
export default ModalMeals