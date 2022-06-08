import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { retrieveAllPatients } from '../logic'

import PatientItemList from './PatientItemList'
import SearchPatient from './SearchPatient'
import MyPatientsHeader from './MyPatientsHeader'




function MyPatients(){

    const [patients, setPatients] = useState()

    const [query, setQuery] = useState(('q')) //Pendiente

    const navigate = useNavigate()

    const handleGoToPatientDetail = patientId => navigate(`/patient/${patientId}`)

     useEffect(() => {
         showAllPatients()
     }, [])

   const showAllPatients = () => {
        try {
            retrieveAllPatients(sessionStorage.token)
                .then(patients => setPatients(patients))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

  

    const handleCreatePatient = () => {
        console.log('botón handle create patient')
        navigate('/register-patient')
    }

    const showResults = query => { //pendiente
        setQuery(query)
        navigate(`search?q=${query} `)  
        // ${patientId}
    }

    
    
    return (
        <div>  
            <MyPatientsHeader />
            <button onClick={handleCreatePatient }>Create patient</button>

            <SearchPatient query={ query } onQueryChange={ showResults }/>
        
            <div>
                <ul>
                    {patients ? patients.map(patient => {
                        return <li key={patient.id} onClick={()=> handleGoToPatientDetail(patient.id)}>
                            <PatientItemList info={patient} />
                        </li>
                    }) :  <p> No patients, please add one</p>
                    }
                </ul>
    
            </div>


        </div>
    )
}

export default MyPatients