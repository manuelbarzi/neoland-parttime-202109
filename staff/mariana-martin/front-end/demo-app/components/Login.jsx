class Login extends React.Component {
    constructor() {

        logger.debug('Login --> constructor') //indica en consola cuando el login se construye

        super()

        this.state = { feedback: null}
    }

    render() {

        logger.debug('Login --> render')

        return <div>
            <form onSubmit={event => { //autenticar 
                event.preventDefault()  //prevent, para manejarlo con javascript y no se comporte como submit normal,

                const username = event.target.username.value //recupero los datos de los inputs
                const password = event.target.password.value

                try { //llamar a la lógica del authenticate, si se produce un error sincrono
                    authenticateUser(username, password, (error, token) => {
                        if (error) {
                            this.setState({ feedback: error.message })

                            return
                        }
                        
                        this.props.onLoggedIn(token) //le paso callback através de props a la app y la app, en el callback recibe el token y lo setea
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
                event.preventDefault()

                this.props.onRegisterClick() //este callback de onRegisterClick que viene de las props, que recibimos de la app

            }}>Register</a>
        </div>
    }
}