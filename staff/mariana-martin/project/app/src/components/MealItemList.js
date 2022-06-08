import { AiOutlineCloseCircle } from "react-icons/ai"
import './styles/MealItemList.css'

function MealItemList({ info, onDeleteMeal  }) {

    


    return (                        //paso el id de la meal, al compo AllMeals(donde se declara)
        <div className="meal-item"> 
            <div onClick={() => onDeleteMeal(info.id)}><AiOutlineCloseCircle className="close-icon" /></div>
            <h4> Title: {info.title}</h4>
            <p> <strong> Description: </strong> {info.description} </p>
            <p> <strong> Id: </strong> {info.id} </p>
            <p> <strong> Nutritionist: </strong> {info.nutritionistName} </p>
        </div>

    )
}

export default MealItemList