// class App extends React.Component {
//     constructor() {
//         logger.debug('App -> constructor')

//         super()

//         this.state = {
//             view: sessionStorage.token ? 'home' : 'login',
//             token: sessionStorage.token ? sessionStorage.token : null
//         }
//     }

//     componentWillMount() {
//         logger.debug('App -> will mount')
//     }

//     componentDidMount() {
//         logger.debug('App -> did mount')
//     }

//     componentWillUnmount() {
//         logger.debug('App -> will unmount')
//     }

//     render() {
//         logger.debug('App -> render')

//         if (this.state.view === 'login')
//             return <Login
//                 onRegisterClick={() => this.setState({ view: 'register' })}
//                 onLoggedIn={token => this.setState({ view: 'home', token })}
//             />
//         else if (this.state.view === 'register')
//             return <Register
//                 onLoginClick={() => this.setState({ view: 'login' })}
//                 onRegistered={() => this.setState({ view: 'register-success' })}
//             />
//         else if (this.state.view === 'register-success')
//             return <RegisterSuccess onLoginClick={() => this.setState({ view: 'login' })} />

//         else if (this.state.view === 'home')
//             return <Home token={this.state.token} onLoggedOut={() => this.setState({ view: 'login', token: null })} 
//             onModified={() => this.setState({ view : 'modify user'})}
//             />
//         else if (this.state.view ===  'modify user')
//             return <ModifyUsername token={this.state.token}
//                 onModifyClick ={() => this.setState ({view: 'login'})}
//                 onGoBack={() => this.setState ({view:'home'})} />

//             //     else if (this.state.view ===  'modify password')
//             // return <ModifyPassword token={this.state.token}
//             //     onModifyClick ={() => this.setState ({view: 'login'})}
//             //     onGoBack={() => this.setState ({view:'home'})} />
//     }
// }

class App extends React.Component {
    constructor() {
        logger.debug('App -> constructor')

        super()

        this.state = {
            view: sessionStorage.token ? 'home' : 'login',
            token: sessionStorage.token ? sessionStorage.token : null
        }
    }

    componentWillMount() {
        logger.debug('App -> will mount')
    }

    componentDidMount() {
        logger.debug('App -> did mount')
    }

    componentWillUnmount() {
        logger.debug('App -> will unmount')
    }

    render() {
        logger.debug('App -> render')

        if (this.state.view === 'login')
            return <Login
                onRegisterClick={() => this.setState({ view: 'register' })}
                onLoggedIn={token => this.setState({ view: 'home', token })}
            />
        else if (this.state.view === 'register')
            return <Register
                onLoginClick={() => this.setState({ view: 'login' })}
                onRegistered={() => this.setState({ view: 'register-success' })}
            />
        else if (this.state.view === 'register-success')
            return <RegisterSuccess onLoginClick={() => this.setState({ view: 'login' })} />
        else if (this.state.view === 'home')
            return <Home token={this.state.token} onLoggedOut={() => this.setState({ view: 'login', token: null })} />
    }
}