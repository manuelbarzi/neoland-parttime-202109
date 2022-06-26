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
import EditPatient from './EditPatient'
import MealPlan from './MealPlan'
import PatientWeek from './PatientWeek'
import ShowPatientPlan from './ShowPatientPlan'
import {AiOutlineExport} from 'react-icons/ai'



function Home({ onloggedOut }) {
    const handleLogout = () => {
        delete sessionStorage.token
        onloggedOut()
    }

    //if , en rutas, y pasar por props al header el nombre y rol 

    const [name, setName] = useState(null)
    const [role, setRole] = useState(null)
    const [id, setId ] = useState(null)

    useEffect(() => {
        try {
            retrieveNutritionist(sessionStorage.token) //misma lógica me sirve para recuperar paciente
                .then(user => {
                    
                   
                    const { name, role, id } = user
                    setName(name)
                    setRole(role)
                    setId(id)
                })
                .catch(error => {
                    alert(error.message)

                    delete sessionStorage.token
                    onloggedOut()
                })

        } catch (error) {
            alert(error.message)
            delete sessionStorage.token

            onloggedOut()
        }
    }, [onloggedOut])



    if (name && role === 0) {
        return <div className="home-container">

            <Header name={name} role={role} />
           <div><button className="logout-button" onClick={handleLogout}><AiOutlineExport/>Logout</button></div> 

            <Routes>
                <Route path="/" element={<HomeMenu />} />
                <Route path="/my-patients/*" element={<MyPatients />} />
                <Route path="/register-patient" element={<PatientForm />} />
                <Route path="/patient/:patientId/" element={<PatientDetail />} />
                <Route path="/edit/:patientId" element={<EditPatient />} />
                <Route path="/my-meals" element={<Meals />} />
                <Route path="/mealplan/:patientId/*" element={<MealPlan />} />

                {/* <Route path="/add" element={<AddingMeal />} /> */}

                {/* <Route path="*" element={ <ErrorPageCompo /> } />  */}
            </Routes>

            <NutritionistFooter />
        </div>
    }

 
    if (name && role === 1) {
        return (
            <div>
                <Header name={name} role={role} />
                <div><button className="logout-button" onClick={handleLogout}><AiOutlineExport/>Logout</button></div>
                <p>id: {id} </p>
                <br></br>
                <p>Hello <strong>{name}</strong> </p>
                <p>Your Weekly MealPlan Is Right Here! </p>
            
           
               
              

            <Routes>
                <Route path="/" element={ <PatientWeek id={id}/>}/>
                <Route path="/plan/day/:day" element={ <ShowPatientPlan id={id}/>}/>
           
                {/* <Route path="/:patientId" element={ <PatientWeek />}/> */}
            </Routes>
            </div>)
    }

}
export default Home