
import './styles/NutritionistHeader.css'
import './styles/PatientHeader.css'

function NutritionistHeader({ name, role }) {


    if (name && role === 0) {
        return (
            <div className="container-nutri-header">
                <h3> MY MEALS</h3>
                <h3> Hello Nutritionist  {name} </h3>
            </div>
        )
    }

    if (name && role === 1) {
        return (
            <div className="container-patient-header">
                
                <h2> Hello Patient {name} </h2>
            </div>
        )
    }
}

export default NutritionistHeader