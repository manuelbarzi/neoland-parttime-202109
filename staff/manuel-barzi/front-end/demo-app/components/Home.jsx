class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = { name: null }
    }

    componentDidMount() {
        logger.debug('Home -> did mount')

        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error) return alert(error.message)

                this.setState({ name: user.name })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        logger.debug('Home -> render')

        if (this.state.name)
            return <h1>Hello, {this.state.name ? this.state.name : 'World'}!</h1>
        else return null
    }
}