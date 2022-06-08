import { createPatient } from '../logic'
import { useContext } from 'react'
import Context from './Context'

function PatientForm() {

    const { setResponse } = useContext(Context)

    const newPatient = event => {
        event.preventDefault()
        
       const { target:  { name: { value: name}, email: { value: email}, password: { value: password}, age: { value: age}, weight:{ value: weight}, height: { value: height}, measures: { value: measures},  goal: { value: goal} }} = event

        try {
            createPatient(sessionStorage.token, name, email, password, parseInt(age), parseInt(weight), parseInt(height), measures, goal)
                .then(() => {
                    setResponse({ level: 'info', message: 'Patient created' })
                })
             
                .catch(error => alert(error.message))
                
        } catch (error) {
            setResponse({ level: 'error', message:error.message})
        }
    }

    return (
        <div>
            <h2>New Patient</h2>

            <form onSubmit={ newPatient }>

                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="e-mail" />
                <input type="password" name="password" placeholder="password" />
                <input type="number"  name="age"   placeholder="age" />
                <input type="number" name="weight" placeholder="weight" />
                <input type="number" name="height" placeholder="height" />
                <input type="text" name="measures" placeholder="measures" />
                <input type="text" name="goal" placeholder="goal" />

                <button type="submit" > Save </button>
            </form>
        </div>
    )

}

export default PatientForm