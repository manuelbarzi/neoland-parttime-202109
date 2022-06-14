
import ModalMeals from './ModalMeals'
import {useState } from 'react'

function AddingMeal() {


 
    const [ modal, setModal ] = useState(false)
   


    const openModal = () => {
        setModal(true)
      
    }

    const closeModal = () => {
        setModal(false)
       
    }
    
 
    
    return (
        <div>
            <p><strong> Day: </strong></p>
            <p> Breakfast  </p>
            <button onClick={ openModal }> Select Meal </button>
            <p> Snack </p>
            <button onClick={ openModal }> Select Meal </button>
            <p> Lunch </p>
            <button onClick={ openModal }> Select Meal </button>
            <p> Snack </p>
            <button onClick={ openModal }> Select Meal </button>
            <p> Dinner </p>
            <button onClick={ openModal }> Select Meal </button>
    
            { modal ?  <ModalMeals closeModal={ closeModal }/> : <></>}
         
        </div>
    )
}

export default AddingMeal