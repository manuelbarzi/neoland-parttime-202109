import { useState, useEffect } from 'react'
import { retrieveNutritionist } from '../src/logic'
import './styles/NutritionistHeader.css'

function NutritionistHeader({ loggedOut }){

    const [name, setName] = useState(null)
    const [role, setRole] = useState(null)
    
    // const handleLogout = () => {
    //     delete sessionStorage.token
    //     loggedOut()
    // }

    
    useEffect(() => {
        console.log('aqui se llama use effect')
        try {
            retrieveNutritionist(sessionStorage.token)
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

    if(name && role === 0){
        return (
        <div className="container-nutri-header">
            <h2>HOME,logo</h2>
            <h3> Hello Nutri {name} </h3>
        </div>
        ) }
    else if (name && role === 1){
        return (
            <div className="">
                <h2>HOME,logo</h2>
                <h3> Hell Patient {name} </h3>
            </div>
            ) }
    }



export default NutritionistHeader