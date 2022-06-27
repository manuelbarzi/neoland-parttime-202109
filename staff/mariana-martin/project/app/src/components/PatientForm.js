import { createPatient } from '../logic'
import { useContext } from 'react'
import Context from './Context'
import {AiOutlineLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import './styles/PatientForm.css'

function PatientForm() {

    const { setResponse } = useContext(Context)

    const navigate = useNavigate()

    const newPatient = event => {
        event.preventDefault()
        
       const { target:  { name: { value: name}, email: { value: email}, password: { value: password}, age: { value: age}, weight:{ value: weight}, height: { value: height}, measures: { value: measures},  goal: { value: goal} }} = event

        try {
            createPatient(sessionStorage.token, name, email, password, parseInt(age), parseInt(weight), parseInt(height), measures, goal)
                .then(() => {
                    setResponse({ level: 'info', message: 'Patient created' })
                    navigate("/my-patients")
                })
                .catch(error => alert(error.message))
                
        } catch (error) {
            setResponse({ level: 'error', message:error.message})
        }
        
    }

    return (
        <div>
            <div onClick={() => navigate("/my-patients")}> <AiOutlineLeft className="back-icon" /> </div>

            <h2>New Patient</h2>

            <form onSubmit={ newPatient } className="container-register-patient">

                <input className="register-input" type="text" name="name" placeholder="name" />
                <input className="register-input" type="email" name="email" placeholder="e-mail" />
                <input className="register-input" type="password" name="password" placeholder="password" />
                <input className="register-input" type="number"  name="age"   placeholder="age" />
                <input className="register-input" type="number" name="weight" placeholder="weight" />
                <input className="register-input" type="number" name="height" placeholder="height" />
                <input className="register-input" type="text" name="measures" placeholder="measures" />
                <input className="register-input" type="text" name="goal" placeholder="goal" />

                <button type="submit" className="register__button"> Save </button>
            </form>
        </div>
    )

}

export default PatientForm