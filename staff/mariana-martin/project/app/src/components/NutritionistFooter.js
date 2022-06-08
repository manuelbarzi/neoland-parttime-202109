import { Link } from 'react-router-dom'
import './styles/NutritionistFooter.css'



function NutritionistFooter(){

    return (
        <div className="container-nutri-footer">
            
            <nav>
                <Link className="link" to="/" >Home</Link>
                <Link className="link" to="/my-patients">My Patients</Link>
                <Link className="link" to="/my-meals">My Meals</Link>
                <Link className="link" to="/my-calendar">My Calendar</Link>
            </nav>
        </div>
    )
}

export default NutritionistFooter