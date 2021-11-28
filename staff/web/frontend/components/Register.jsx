class Register extends React.Component {
    constructor() {
        super()

        this.state = { feedback: null }
    }

    render() {
        return <div>
            <form onSubmit ={ event =>{
                event.preventDefault()
                const name= event.target.name.value
                const username= event.target.username.value
                const password= event.target.password.value
               try {registerUser(name,username,password,(error)=>{
                   if(error){
                   this.setState({ feedback: error.message })

                   return
               }

               this.props.onRegisterIn(null)
                  })}
                   
                catch (error) {
                    this.setState({ feedback: error.message }) 
               }
                
    }}>


                <input type="text" name="name" placeholder="name" />
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Register</button>
                {this.state.feedback? <p>{this.state.feedback}</p> :null // quiero que en caso de que haya feedback (es decir, si hay algún error) me pinte un párrafo con el feedback 
                }
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a>

        </div >
    }
}