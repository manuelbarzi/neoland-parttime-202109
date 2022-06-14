import { Route, Routes } from 'react-router-dom'
import '../components/styles/MealPlan.css'
import AddingMeal from './AddingMeal'
import Week from './Week'
import PatientNameHeaderForMealPlan from './PatientNameHeaderForMealPlan'
import{ useState } from 'react'


function MealPlan() {

    const [ day, setDay ] = useState()
   
    
    const changeDay = (day) => {
        console.log(day)   
       setDay(day)
    }

 
   
    return (
            <div>
                
                <PatientNameHeaderForMealPlan />          
                <Routes>
                    <Route path="/" element={<Week changeDay={changeDay}/>} />
                    <Route path="add/:mealId"  element={<AddingMeal day={day}/>}/>  
                </Routes>
    
            </div>
      
    )
}
export default MealPlan