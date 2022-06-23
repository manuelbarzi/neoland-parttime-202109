import { useEffect } from "react"
import Day from './Day'
import {useNavigate} from 'react-router-dom'


function PatientWeek( { id }){

    const patientId = id

    const navigate = useNavigate()

    useEffect(()=>{
        console.log(patientId)
    })

    const handleDaySelected = (day) => {
        day = day.toLowerCase() 
         
         navigate(`plan/day/${day}`)
     }
   

    return(
        <div>
        <div> </div>
        <div className="container-days">
            <div className="select-day"><Day day="Monday" onDayClicked={handleDaySelected} /> </div>
            <div className="select-day"><Day day="Tuesday"  onDayClicked={handleDaySelected}/> </div>
            <div className="select-day"><Day day="Wednesday"  onDayClicked={handleDaySelected}/> </div>
            <div className="select-day"><Day day="Thursday"  onDayClicked={handleDaySelected}/> </div>
            <div className="select-day"><Day day="Friday"  onDayClicked={handleDaySelected}/> </div>
            <div className="select-day"><Day day="Saturday"  onDayClicked={handleDaySelected}/> </div>
            <div className="select-day"><Day day="Sunday"  onDayClicked={handleDaySelected}/> </div>
        </div>
    </div>
    )
}

export default PatientWeek