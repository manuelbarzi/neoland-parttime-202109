import './styles/CreateMealButton.css'

function CreateMealButton({ onCreateClick }){

    return (
        <div> 
         
            <button className="create-button" onClick={ onCreateClick }> Create Meal </button> 
          
           
        </div>
    )
}
export default CreateMealButton