class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = { name: null }
    }

    componentWillMount() {
        logger.debug('Home -> will mount')
    }

    componentDidMount() {
        logger.debug('Home -> did mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }

                this.setState({ name: user.name })
            })
        } catch (error) {
            alert(error.message)

            delete sessionStorage.token

            this.props.onLoggedOut()
        }
    }

    componentWillUnmount() {
        logger.debug('Home -> will unmount')
    }

    render() {
        logger.debug('Home -> render')

        if (this.state.name)
            return <div>
                <h1>Hello, {this.state.name ? this.state.name : 'World'}!</h1>
                <button onClick={() => {
                    delete sessionStorage.token

                    this.props.onLoggedOut()
                }}>Logout</button>
            </div>
        else return null
    }
}