import ModalMeals from './ModalMeals'
import {useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'

function AddingMeal() {
    const { day } = useParams()
    const { mealId } = useParams()
    const { patientId } = useParams()
    
    const [ modal, setModal ] = useState(false)

    const navigate = useNavigate()


    const openModal = () => {
        setModal(true)
       navigate(`meal/${mealId}`)
    }

    const closeModal = () => {
        setModal(false)
      
    }

    const handleMealId = mealId => navigate(`meal/${mealId}`)
    
    return (
        <div>
            <div onClick={() => navigate(`/mealplan/${patientId}`)}> <AiOutlineLeft className="back-icon" /> </div>

            <p><strong> Day: {day} </strong></p>
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

            <Routes>
                <Route path="meal/:mealId" element=  { modal ?  <ModalMeals closeModal={ closeModal } onSelectedMeal={handleMealId} /> : <></>} />
            </Routes>
           
           
       
            
          
         
        </div>
    )
}

export default AddingMeal