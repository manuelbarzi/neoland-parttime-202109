class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            view:'profile'}
    }

    goBack = event => {
        event.preventDefault()
        this.props.onReturnClick()
    }

    changeName = () =>this.setState({ view: 'changename' })

    changePassword = () => this.setState({ view: 'changepassword'})

    goOut = () => this.setState({view:'profile'})

    // updatedPassword =()=> this.setState({ view: 'login', token: null })


    // logout = () => necesito borrar token y salir a login

    render() {
        return <div>
            <h2>Profile</h2>
            <button onClick={this.goBack}>Return</button>
            <button onClick={this.changeName}>Change Name</button>
            <button onClick={this.changePassword}>Change Password</button>

            {this.state.view === 'changename' && <ChangeName 
                closeSetting = {this.goOut}
            />}

            {this.state.view === 'changepassword' && <ChangePassword 
                closeSetting = {this.goOut}
                updatedPassword = {this.updatedPassword}
            />}
        </div>
    }
}

