class Register extends React.Component {
    constructor() {
        logger.debug('Register -> constructor')

        super()

        this.state = { feedback: null }
    }

    componentWillMount() {
        logger.debug('Register -> will mount')
    }

    componentDidMount() {
        logger.debug('Register -> did mount')
    }

    componentWillUnmount() {
        logger.debug('Register -> will unmount')
    }

    render() {
        logger.debug('Register -> render')
        
        return <div>
            <form onSubmit={event => {
                event.preventDefault()

                const name = event.target.name.value
                const username = event.target.username.value
                const password = event.target.password.value

                try {
                    registerUser(name, username, password, error => {
                        if (error) {
                            this.setState({ feedback: error.message })
                            return
                        }
                        this.props.onRegistered()
                    })
                }
                catch (error) {
                    this.setState({ feedback: error.message })
                }

            }}>
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Register</button>

                {this.state.feedback ? <p>{this.state.feedback}</p> : null}
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a>
        </div>
    }
}