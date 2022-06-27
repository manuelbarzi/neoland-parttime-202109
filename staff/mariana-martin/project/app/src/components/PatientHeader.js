import { useState, useEffect } from 'react'
import { retrievePatient } from '../logic'
import './styles/PatientHeader.css'

function PatientHeader(){

    const [name, setName] = useState(null)

    useEffect(() => {
       
        try {
            retrievePatient(sessionStorage.token)
                .then(nutritionist => {
                    const { name } = nutritionist

                    setName(name)
                })
                .catch(error => {
                    alert(error.message)

                    delete sessionStorage.token
                    //onLoggedOut()
                })
        } catch (error) {
            alert(error.message)
            delete sessionStorage.token
            //onLoggedOut()
        }
    }, [])

    if(name)
        return (
        <div className="patient-header">
            <h2>Welcome</h2>
            <h3> Hello Patient {name} </h3>
        </div>
        )
}


export default PatientHeader