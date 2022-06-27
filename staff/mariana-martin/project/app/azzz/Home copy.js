import './styles/Home.css'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { retrieveNutritionist } from '../src/logic'
import MyPatients from '../src/components/MyPatients'
import PatientForm from '../src/components/PatientForm'
import ErrorPageCompo from '../src/components/ErrorPageCompo'

function Home({ onLoggedOut }) {

    const [name, setName] = useState(null)

    const navigate = useNavigate()

    const handleLogout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    useEffect(() => {
        console.log('aqui se llama use effect')
        try {
            retrieveNutritionist(sessionStorage.token)
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


    const handleMyPatients = () => navigate('/my-patients')

    if(name)
    return <div className="home-container">
        
        <h2>HOME,llllogo</h2>
        <h3> Hello Nutri {name} </h3>
        <h3 className="home-container__options" onClick={handleMyPatients}> My Patients </h3>
        <h3 className="home-container__options" >My Data</h3>
        <h3 className="home-container__options" >My Calendar</h3>
        <button onClick={handleLogout}>Logout</button>

        <Routes>
        <Route path="/my-patients" element={<MyPatients /> }  />
        <Route path="/register-patient" element={<PatientForm /> }  /> 
        <Route path="*" element={ <ErrorPageCompo /> } /> 
        </Routes>
       
       
    </div>

}
export default Home