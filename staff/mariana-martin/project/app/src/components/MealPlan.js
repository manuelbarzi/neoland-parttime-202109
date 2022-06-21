import { Route, Routes, useNavigate} from 'react-router-dom'
import '../components/styles/MealPlan.css'
import AddingMeal from './AddingMeal'
import Week from './Week'

import PatientNameHeaderForMealPlan from './PatientNameHeaderForMealPlan'

function MealPlan() {    
    const navigate = useNavigate()

  

    const handleDaySelected = (day) => {
       day = day.toLowerCase() 
        
        navigate(`day/${day}`)
    }

    return (
            <div>
                
                <PatientNameHeaderForMealPlan />          
                <Routes>
                    <Route path="/" element={<Week onDaySelected={handleDaySelected}/>} />
                    <Route path="day/:day/*" element={<AddingMeal />}/>               
                </Routes>
    
            </div>
    )
}
export default MealPlan