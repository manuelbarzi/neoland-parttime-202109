class Login extends React.Component {
    constructor() {
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
        return <div className="container">
            <h1 className="container__titleh1">¡Bienvenido!</h1>
            <form className="container container--columnFlex" onSubmit={event => {
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
                <input className="form__input" type="text" name="username" placeholder="username" />
                <input className="form__input" type="password" name="password" placeholder="password" />

                <button>Login</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
        </div>
    }
}