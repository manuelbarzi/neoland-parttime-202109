class Login extends React.Component {
    constructor() {

        logger.debug('Login --> constructor') 

        super()

        this.state = { feedback: null}
    }

    render() {

        logger.debug('Login --> render')

        return <div>
            <form onSubmit={event => { //autenticar 
                event.preventDefault()  

                const username = event.target.username.value //através del evento recupero estos datos
                const password = event.target.password.value

                try { 
                    authenticateUser(username, password, (error, token) => {
                        if (error) {
                            this.setState({ feedback: error.message }) //poner valor del feedback, si hay error, el texto del error en la lógica
                            
                            return
                        }
                        
                        sessionStorage.token = token /////propiedades del objeto, guardará el token
                        this.props.onLoggedIn(token)  

                    })
                } catch (error) {
                    this.setState ({ feedback: error.message}) 
                }
            }}>
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>

                <button>Login</button>

                {this.state.feedback ? <p> {this.state.feedback} </p> : null}
             {/* si hay feedback, distinto de null, un parrafo con el valor de feedback , si no null, no pintes nada*/}


            </form>

            <a href="" onClick={event => {
                event.preventDefault()  //evita que se comporte como link, lo queremos controlar con javascript

                this.props.onRegisterClick() //este callback de onRegisterClick que viene de las props, que recibimos de la app

            }}>Register</a>
        </div>
    }
}