import './styles/Home.css'

import { useNavigate } from 'react-router-dom'
import Sticker from './Sticker'



function HomeMenu() {

  
    const handleMyPatients = () => navigate('/my-patients')

    const handleMyMeals = () => navigate('/my-meals')
    const handleY = () => console.log('próximamente...')
  
    const navigate = useNavigate()

   
    return <div className="home-menu">
        
            <Sticker option="My Patients" onClick={handleMyPatients} />
            <Sticker option="My Meals" onClick={handleMyMeals} />
            <Sticker option="My calendar" onClick={handleY} />
    
    </div>
    }

export default HomeMenu