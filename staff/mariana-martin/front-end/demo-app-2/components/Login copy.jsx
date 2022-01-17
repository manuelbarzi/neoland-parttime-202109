class Login extends React.Component {
    constructor() {
        
        super()

        this.state = { feedback: null }
    }

    render() {

        return <div>

          
        <form onSubmit={event => {   //autenticar 
                event.preventDefault()  //prevent, para manejarlo con javascript y no se comporte como submit normal,

                const username = event.target.username.value //recupero los datos de los inputs
                const password = event.target.password.value

                try {  //llamar a la lógica del authenticate
                    authenticateUser(username, password, (error, token) => {  
                        if (error) {  //si hay un error sincrono ci algún campo está mal o vacío:
                            this.setState({ feedback: error.message }) //se cambiará el estado del feedback (de arriba que es null)
                                //setState es cambiar el estado del feedback al error
                    
                                return //para que no continue abajo
                        }

                        this.props.onLoggedIn(token)
                    })
                } catch (error) {
                    this.setState({ feedback: error.message })
                }
            }}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />

                <button>Login</button>


                {this.state.feedback ? <p>  {this.state.feedback}  </p> : null}   
                {/* si hay feedback, distinto de null, un parrafo con el valor de feedback , si no null, no pintes nada*/}
                

            </form>

            <a href="" onClick={event => {  //link de la palabra REGISTRO

                event.preventDefault()  //los anchors tartan de navegar a algun lugar, porlo que debemos evitar que se comporte con un link,y darle instrucciones con javascript
                                        //que visualmente sea un link, pero lo maneje con javascript
                this.props.onRegisterClick()  //este callback de onRegisterClick que viene de las props, que recibimos de la app

            }}>Register</a>

        </div>
    }
}