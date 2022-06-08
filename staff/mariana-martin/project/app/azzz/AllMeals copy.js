
import MealItemList from "../src/components/MealItemList";



function AllMeals( { meals, onDeleteMeal, reload }){

    


    return (
        <div> 
            <h3>All Meals</h3> 
            <button onClick={reload}>prueba</button>
                <ul>
                    { meals ? meals.map(meal => {
                        return <li key={meal.id} id={meal.id} >
                        <MealItemList info={meal} onDeleteMeal={onDeleteMeal} />
                        </li>
                    }) : <p> No meals add one please</p>}
                </ul>
        </div>
    )
}

export default AllMeals