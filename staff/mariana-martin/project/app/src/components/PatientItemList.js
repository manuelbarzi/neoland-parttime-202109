import './styles/PatientItem.css'

function PatientItemList({ info }) {


    return (
        <div className="container-patient-item">
          
            <h4> Name: {info.name}</h4>
            <p> <strong> Id: </strong> {info.id} </p>
            <p> <strong> Email: </strong> {info.email} </p>
        </div>

    )
}
export default PatientItemList