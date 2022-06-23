import { retrieveAllMeals } from '../logic'
import { useState, useEffect } from 'react'
import './styles/Modal.css'

import { useParams} from 'react-router-dom'
import ModalListMeal from './ModalListMeal'



function ModalMeals( {  onCloseModal, onAddMeal, onSelectedMeal  }){

    const [ meals, setMeals ] = useState()

   
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

    
    return(
        <div className="modal-background"  >
            <div className="modal-container">
                <div className="modal-container__body">
                <p> Select Meal Modal </p>
                <p><strong> {day} </strong></p>
                <button onClick={ onCloseModal }>x</button>
                
                <ul>
                    { meals ? meals.map (meal => {
                        return <li key={meal.id} >
                               <ModalListMeal meal={meal} onSelectedMeal={onSelectedMeal} />
                            </li>
                        }): <></>}
                </ul>
                <button onClick={ onAddMeal }> Add </button>
            </div>
          </div>
        </div>
    )
}
export default ModalMeals