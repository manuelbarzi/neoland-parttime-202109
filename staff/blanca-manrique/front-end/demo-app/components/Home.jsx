class Home extends React.Component {
    constructor() {
        super()

        this.state = { name: null }
    }
    componentWillMount() { 
        try {
            retrieveUser(this.props.token, (error, user) => {
                if (error){
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
    render() {

        if (this.state.name) {
            return <div>
                <h1>hello, {this.state.name ? this.state.name : 'World'}!</h1>

                <button onClick={event => {
                    delete sessionStorage.token
                    
                    this.props.onLoggedOut()
                }}>Logout</button>

                <button onClick={event => {
                    event.preventDefault()
                    this.props.onUserSettingClick()
                }}>Change name</button>

                <button onClick = {event =>{
                    event.preventDefault()
                    this.props.modifiedPassword()
                }}>Change password</button>
            </div>
        }
        else { return null }
    }
}