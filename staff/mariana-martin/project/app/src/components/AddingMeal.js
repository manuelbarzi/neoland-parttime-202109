
import './styles/AddingMeal.css'
import ModalMeals from './ModalMeals'
import {useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'

function AddingMeal() {
    const { day } = useParams()
  //const { mealId } = useParams()
    const { patientId } = useParams()
    
    const [ modal, setModal ] = useState(false)

    

    const navigate = useNavigate()


    const openModal = () => {
        setModal(true)
        navigate(`meal`)
    }

    const closeModal = () => {
        setModal(false)
      
    }


    
    return (
        <div className="adding-meal-container">
            <div onClick={() => navigate(`/mealplan/${patientId}`)}> <AiOutlineLeft className="back-icon" /> </div>

            <p><strong> Day: {day} </strong></p>
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
                <Route path="meal/*" element= { modal ? <ModalMeals closeModal={ closeModal } /> : <></>} />
            </Routes>     
         
        </div>
    )
}

export default AddingMeal