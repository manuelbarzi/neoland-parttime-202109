import Day from './Day'
import {AiOutlineLeft} from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom'
import { useParams} from 'react-router-dom'

function Week ( { onDaySelected }) {    

    const navigate = useNavigate()
    const params = useParams()
    const { patientId } = params




    return ( 
        <div>
            <div onClick={() => navigate(`/patient/${patientId}`)}> <AiOutlineLeft className="back-icon" /> </div>
            <div className="container-days">
                <div className="select-day"><Day day="Monday" onDayClicked={onDaySelected} /> </div>
                <div className="select-day"><Day day="Tuesday" onDayClicked={onDaySelected} /> </div>
                <div className="select-day"><Day day="Wednesday" onDayClicked={onDaySelected} /> </div>
                <div className="select-day"><Day day="Thursday" onDayClicked={onDaySelected} /> </div>
                <div className="select-day"><Day day="Friday" onDayClicked={onDaySelected} /> </div>
                <div className="select-day"><Day day="Saturday" onDayClicked={onDaySelected} /> </div>
                <div className="select-day"><Day day="Sunday" onDayClicked={onDaySelected} /> </div>
            </div>
        </div>
    )
}
export default Week