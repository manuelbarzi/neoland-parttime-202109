class Home extends React.Component {
    constructor() {
        super()

        this.state = { name: null }
    }
    componentWillMount() { 
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

        if (this.state.name) {
            return <div>
                <h1>hello, {this.state.name ? this.state.name : 'World'}!</h1>

                <button onClick={event => {
                    event.preventDefault()
                    this.props.onUserSettingClick()
                }}>Change name</button>
            </div>
        }
        else { return null }
    }
}