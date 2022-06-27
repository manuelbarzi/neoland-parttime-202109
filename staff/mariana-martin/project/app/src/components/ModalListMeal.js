
function ModalListMeal( { meal, onSelectedMeal }) {

 

    return (
        <div>
            <p><strong> {meal.title} </strong></p>
            <p>{meal.description}</p>
           
            <input type="radio" name="meal" value="meal" onClick={() => onSelectedMeal(meal.id)} />
        </div>
    )
}
export default ModalListMeal

