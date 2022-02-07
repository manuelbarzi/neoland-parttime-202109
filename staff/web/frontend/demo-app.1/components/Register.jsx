const { useState } = React

function Register (){
const [feedback, setFeedback] = useState(null)

const register =event =>{
    event.preventDefault()
    const name= event.target.name.value
    const city = event.target.city.value
    const country = event.target.country.value
    const username= event.target.username.value
    const password= event.target.password.value
   try {registerUser(name,city, country,username,password,(error)=>{
       if(error){
       this.setState({ feedback: error.message })

       return
   }

   this.props.onRegistered()
      })}
       
    catch (error) {
        this.setState({ feedback: error.message }) 
   }
}


const goToLogin = event => {
    event.preventDefault()

    this.props.onLoginClick()

}
logger.debug('Register -> render')
return <div className='contenedor'>
    <form className='contenedor_credentials' onSubmit ={register}>


        <input type="text" name="name" placeholder="name" />
        <input type="text" name="city" placeholder="city" required />
        <input type="text" name="country" placeholder="country" required />
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>
        {feedback? <p>{feedback}</p> :null // quiero que en caso de que haya feedback (es decir, si hay algún error) me pinte un párrafo con el feedback 
        }
    </form>

    <a href="" onClick={goToLogin}>Login</a>

</div >




}




