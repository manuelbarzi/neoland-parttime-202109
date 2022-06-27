import './styles/AllMeals.css'
import MealItemList from "./MealItemList";
import { retrieveAllMeals } from "../logic";
import { useState, useEffect } from 'react'
import { deleteMeal } from "../logic";
import { useContext } from 'react'
import Context from "./Context";
import {AiOutlineLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



function AllMeals({ reload }) {

    const [meals, setMeals] = useState()

    const { setResponse } = useContext(Context)

    const navigate = useNavigate()

    //Recupero 
    const getAllMeals = () => {
        try {
            retrieveAllMeals(sessionStorage.token)
                //.then(meals => console.log(meals))
                .then(meals => setMeals(meals))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        console.log('corre el useEffect recupera all meals')
        getAllMeals()

    }, [reload])

    //Elimino y refresco

    const handleDeleteMeal = mealId => {
        try {
            deleteMeal(sessionStorage.token, mealId)
                .then(() => getAllMeals()) //llamo función para que me actualice estado
                .then(() => {
                    setResponse({ level: 'info', message: 'Meal Deleted' })
                })
        } catch (error) {
            //console.error(error)
            setResponse({ level: 'error', message: error.message })
        }
    }


    return (
        <div className="meals-container">
            <div onClick={() => navigate("/")}> <AiOutlineLeft className="back-icon" /> </div>
            <h3>All Meals</h3>
            <ul>
                {meals ? meals.map(meal => {
                    return <li key={meal.id} id={meal.id} >
                        <MealItemList info={ meal} onDeleteMeal={handleDeleteMeal} />
                    </li>
                }) : <p> No meals add one please</p>}
            </ul>
        </div>
    )
}

export default AllMeals