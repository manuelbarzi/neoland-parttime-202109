import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { retrievePatient, updatePatient } from '../logic'
import {AiOutlineLeft} from 'react-icons/ai'
import { useContext } from 'react'
import Context from './Context'
import { useNavigate} from 'react-router-dom'


function EditPatient(){

    const { setResponse } = useContext(Context)
    const { patientId } = useParams()
    const [ patient, setPatient ] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrievePatient( sessionStorage.token , patientId)
                .then(patient => 
                    setPatient(patient)
                )
        } catch (error) {
            setResponse({ level: 'error', message:error.message})
        }
     }, [  patientId, setResponse])

     
    const updatingPatient = (event) => {
        event.preventDefault()

        const { target: { name: { value: name}, email: {value: email}, password: { value: password }, age: { value: age }, weight: { value:weight }, height: { value: height }, measures: {value: measures }, goal : {value: goal} }} = event
    
        try {
            updatePatient(sessionStorage.token, patientId, name,  email, password, parseInt(age), parseInt(weight), parseInt(height), measures, goal )
                .then(() => console.log('ya actualicé'))
                
               
        } catch (error) {
            alert(error.message)
        }
    }

    
    return (
        <div>
             <div onClick={() => navigate(`/patient/${patientId}`)}> <AiOutlineLeft className="back-icon" /> </div>
            <h2> Edit Patient Data </h2>
            
            { patient ? <form onSubmit={updatingPatient}>
            <input type="text" name="name" placeholder="name" defaultValue={ patient.name } />
            <input type="email" name="email" placeholder="e-mail" defaultValue={ patient.email } />
            <input type="password" name="password" placeholder="password" defaultValue={ patient.password } />
            <input type="number"  name="age"   placeholder="age" defaultValue={ patient.age } />
            <input type="number" name="weight" placeholder="weight" defaultValue={ patient.weight} />
            <input type="number" name="height" placeholder="height" defaultValue={ patient.height }/>
            <input type="text" name="measures" placeholder="measures" defaultValue={ patient.measures }/>
            <input type="text" name="goal" placeholder="goal" defaultValue={ patient.goal }/>
            <button> Save </button>
            </form> : <h1> Patient not found</h1>} 
        </div>
    )

   
}

export default EditPatient