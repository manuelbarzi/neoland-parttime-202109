import CreateMealButton from "../src/components/CreateMealButton";
import CreateMealForm from "../src/components/CreateMealForm";
import MyMealsHeader from "../src/components/MyMealsHeader";
import AllMeals from "../src/components/AllMeals";
import { retrieveAllMeals, deleteMeal } from "../src/logic";
import { useState, useEffect } from 'react'


function Meals(){   

    const [ showCreateMealForm, setShowCreateMealForm] = useState(false)

    const [ meals, setMeals ] = useState()


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
    }, [])


    //Add meal - recibo datos de onAdd (title, description)
    const addMeal = (meal) => {
        console.log(meal)
        console.log('añade meal')
         const addingNewMeal = [meal, ...meals]
         setMeals(addingNewMeal)     
    }
   
    const handleShowMealForm = () => {
        setShowCreateMealForm(!showCreateMealForm) //muestro form o no?
    }

    //Elimino 
    const handleDeleteMeal = mealId => {
        try {
            deleteMeal(sessionStorage.token, mealId)
                .then(() => console.log('delete', mealId))
        } catch (error) {
            console.error(error)
        }
    }
    
    const reload = () => {
        getAllMeals()
        console.log(meals)
    }

    return (
        <div>
            
           <MyMealsHeader />
           <CreateMealButton onCreateClick={handleShowMealForm}/>
           {showCreateMealForm ? <CreateMealForm  onAdd={ addMeal } onCreateClick={handleShowMealForm}  /> : <></>}
           <AllMeals meals={ meals } onDeleteMeal={ handleDeleteMeal} reload={reload} />
           
          
        </div>
    )
}

export default Meals