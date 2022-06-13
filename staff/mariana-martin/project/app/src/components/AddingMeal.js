

import { useState } from 'react'
import ModalMeals from './ModalMeals'

function AddingMeal( ) {


 
    const [ modal, setModal ] = useState(false)

  //  const [ day, setDay ] = useState({})


    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

   
  
    
    return (
        <div>
           
            <p><strong> Day Aquí cambia el estado del day  </strong></p>
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
        
           { modal?  <ModalMeals closeModal={ closeModal }/> : <></>}
        </div>
    )
}

export default AddingMeal