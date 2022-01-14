class Login extends React.Component {
    constructor() {

        logger.debug('Login --> constructor') 

        super()

        this.state = { feedback: null}
    }
    componentWillMount() {
        logger.debug('Login -> will mount')
    }

    componentDidMount() {
        logger.debug('Login -> did mount')
    }

    componentWillUnmount() {
        logger.debug('Login -> will unmount')
    }
    
    render() {

        logger.debug('Login --> render')

        return <div className='container container--column login panel'>
            <form className='container container--column login' onSubmit={event => { //autenticar 
                event.preventDefault()  

                const username = event.target.username.value 
                const password = event.target.password.value

                //error handling:  ( errores sincronos )
                try { 
                    authenticateUser(username, password, (error, token) => {
                        if (error) {
                            this.setState({ feedback: error.message })
                            

                            return
                        }
                        
                        sessionStorage.token = token /////propiedades del objeto, guardará el token
                        this.props.onLoggedIn(token)  

                    })
                } catch (error) {
                    this.setState ({ feedback: error.message}) 
                }
            }}>
                <input className="input container--column" type="text" name="username" placeholder="username"/>
                <input className="input container--column" type="password" name="password" placeholder="password"/>

                <button className="btn">Login</button>

                {this.state.feedback ? <p> {this.state.feedback} </p> : null}
             {/* si hay feedback, distinto de null, un parrafo con el valor de feedback , si no null, no pintes nada*/}


            </form>

            <a className="hover" href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick() //este callback de onRegisterClick que viene de las props, que recibimos de la app

            }}>Register</a>
        </div>
    }
}