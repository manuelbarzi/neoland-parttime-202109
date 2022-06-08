import { createMeal } from '../src/logic'

import './styles/CreateMealForm.css'
import { useContext  } from 'react'
import Context from  '../src/components/Context'
import { AiOutlineCloseCircle } from "react-icons/ai"




function CreateMealForm( { onAdd, onCreateClick }){

    const { setResponse } = useContext(Context)

   
    const newMeal = event => {
        event.preventDefault()

        const { target: { title: {value: title}, description:{ value: description} }} = event
       
        
            try {
                createMeal( sessionStorage.token, title, description)
                    .then(() => {
                        setResponse({ level: 'info', message: 'Meal Created'})
                    })
            } catch (error) {
                setResponse({ level: 'error', message: error.message})      
            }

        onAdd({ title, description }) //le mando estos datos a onAdd en compo Meals
        event.target.reset()
        onCreateClick() //cierro form

    }


    
    return (
        <div>
            <form className="meal-form" onSubmit={ newMeal } >
                <div> 
                   
                    <label> Title </label>              
                    <input type="text" name="title" placeholder="add title"></input>
                    <label> Description </label>
                    <AiOutlineCloseCircle onClick={onCreateClick}/> 
                    <textarea type="text" name="description" placeholder="add description" rows="10" cols="30"></textarea>
                    <button>Save Meal</button>
                   
                </div>
            </form>
          
        </div>
    )
}

export default CreateMealForm