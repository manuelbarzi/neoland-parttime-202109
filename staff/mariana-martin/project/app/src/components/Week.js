import { useNavigate } from 'react-router-dom'
import Day from './Day'
import { useParams } from 'react-router-dom'

function Week ({ changeDay }) {

    const navigate = useNavigate()

    const params = useParams()
    const { patientId } = params

    
    const goToAddMeal = () => {
       navigate(`/mealplan/${patientId}/add/:mealId`)
     }

    


    return (
            <div className="days-container">
                <div onClick={ goToAddMeal } className="day"><Day day="Monday" changeDay={changeDay} /> </div>
                <div onClick={ goToAddMeal } className="day"><Day day="Tuesday" changeDay={changeDay} /> </div>
                <div onClick={ goToAddMeal } className="day"><Day day="Wednesday" changeDay={changeDay} /> </div>
                <div onClick={ goToAddMeal } className="day"><Day day="Thursday" changeDay={changeDay} /> </div>
                <div onClick={ goToAddMeal } className="day"><Day day="Friday" changeDay={changeDay} /> </div>
                <div onClick={ goToAddMeal } className="day"><Day day="Saturday" changeDay={changeDay} /> </div>
                <div onClick={ goToAddMeal } className="day"><Day day="Sunday" changeDay={changeDay} /> </div>
            </div>
    )
}
export default Week