import CreateMealButton from "./CreateMealButton";
import CreateMealForm from "./CreateMealForm";
import MyMealsHeader from "./MyMealsHeader";
import AllMeals from "./AllMeals";

import { useState} from 'react'


function Meals(){   

    const [ showCreateMealForm, setShowCreateMealForm] = useState(false)

    const [reload, setReload ] = useState()

    
   
    const handleShowMealForm = () => {
        setShowCreateMealForm(!showCreateMealForm) //muestro form o no?
        console.log('cierra form')
        setReload(Date.now()) //creo una estampa de tiempo que cambiará y mandará ese cambio en el estado que le paso a AllMeals
        
    }
            return (
                <div>
                    
                <MyMealsHeader />
                <CreateMealButton onCreateClick={handleShowMealForm}/>
                {showCreateMealForm ? <CreateMealForm  onCreateClick={handleShowMealForm} /> : <></>}
                <AllMeals reload={reload} />
                
                </div>
            )
}

export default Meals