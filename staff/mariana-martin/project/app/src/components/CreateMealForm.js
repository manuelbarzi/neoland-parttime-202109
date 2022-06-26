import { createMeal } from '../logic'

import './styles/CreateMealForm.css'
import { useContext  } from 'react'
import Context from  './Context'
import { AiOutlineCloseCircle } from "react-icons/ai"


function CreateMealForm( {  onCreateClick }){

    const { setResponse } = useContext(Context)


   //Add Meal:

    const newMeal = event => {
        event.preventDefault()

        const { target: { title: {value: title}, description:{ value: description} } } = event
       
        
            try {
                createMeal( sessionStorage.token, title, description )
                    .then(() => {
                        setResponse({ level: 'info', message: 'Meal Created :)'})
                    })
            } catch (error) {
                setResponse({ level: 'error', message: error.message})      
            }
        
        event.target.reset()
        onCreateClick() //cierro form
        
    }

    
    return (
        <div>
            <form className="meal-form" onSubmit={ newMeal } >
                <div className="meal-form"> 
                    <AiOutlineCloseCircle className="createmeal-icon" onClick={onCreateClick} /> 
                    <label> Title </label>              
                    <input className="meal-input__title" type="text" name="title" placeholder="add title" ></input>
                    <label> Description </label>
                 
                    <textarea className="meal-input" type="text" name="description" placeholder="add description" rows="10" cols="30" ></textarea>
                    <button className="savemeal-button" >Save Meal</button>
                   
                </div>
            </form>
          
        </div>
    )
}

export default CreateMealForm