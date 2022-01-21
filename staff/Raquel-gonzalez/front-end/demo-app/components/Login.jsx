class Login extends React.Component {
    constructor() {
        logger.debug('Login -> constructor')

        super()

        this.state = { feedback: null }
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
        logger.debug('Login -> render')

        return <div className='container container--column login panel' >
            <form className='container container--column login' onSubmit={event => {
                event.preventDefault()

                const username = event.target.username.value
                const password = event.target.password.value

                try {
                    authenticateUser(username, password, (error, token) => {
                        if (error) {
                            this.setState({ feedback: error.message })

                            return
                        }

                        sessionStorage.token = token

                        this.props.onLoggedIn(token)
                    })
                } catch (error) {
                    this.setState({ feedback: error.message })
                }
            }}>
                <input className="input container--column" type="text" name="username" placeholder="username" />
                <input className="input container--column" type="password" name="password" placeholder="password" />

                <button className ="button" >Login</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}
            </form>

            <a className="hover" href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
        </div>
    }
}