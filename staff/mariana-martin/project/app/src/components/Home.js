import './styles/Home.css'
import { useState, useEffect } from 'react'
import { retrieveNutritionist } from '../logic'
import { Route, Routes } from 'react-router-dom'
import MyPatients from './MyPatients'
import PatientForm from './PatientForm'
// import ErrorPageCompo from './ErrorPageCompo'
import Header from './Header'
import NutritionistFooter from './NutritionistFooter'
import HomeMenu from './HomeMenu'
import PatientDetail from './PatientDetail'
import Meals from './Meals'




function Home({ loggedOut }) {

    const handleLogout = () => {
        delete sessionStorage.token
        loggedOut()
    }

    //if , en rutas, y pasar por props al header el nombre y rol 

    const [name, setName] = useState(null)
    const [role, setRole] = useState(null)

    // const handleLogout = () => {
    //     delete sessionStorage.token
    //     loggedOut()
    // }


    useEffect(() => {
        console.log('useEffect HOME para recuperar nutri')
        try {
            retrieveNutritionist(sessionStorage.token) //misma lógica me sirve para recuperar paciente
                .then(nutritionist => {
                    const { name, role } = nutritionist

                    setName(name)
                    setRole(role)
                })
                .catch(error => {
                    alert(error.message)

                    delete sessionStorage.token
                    //handleLogout()
                })

        } catch (error) {
            alert(error.message)
            delete sessionStorage.token

            //handleLogout()
        }
    }, [])

    

    if (name && role === 0) {
        return <div className="home-container">

            <Header name={name} role={role} />
            <button onClick={handleLogout}>Logout</button>


            <Routes>
                <Route path="/" element={<HomeMenu />} />
                <Route path="/my-patients/*" element={<MyPatients />} />
                <Route path="/register-patient" element={<PatientForm />} />
                <Route path="/patient/:patientId" element={<PatientDetail />} />
                <Route path="/my-meals" element={<Meals />} />
                {/* <Route path="*" element={ <ErrorPageCompo /> } />  */}
            </Routes>


            <NutritionistFooter />
        </div>
    }

    if (name && role === 1) {
        return(
        <div>
             <Header name={name} role={role} />
             <button onClick={handleLogout}>Logout</button>
            <p>hola Patient {name} </p>
        </div>)
    }

}
export default Home