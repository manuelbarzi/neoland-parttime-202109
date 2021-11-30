// function Home() {
//     return <h1>Hello, World!</h1>
// }
class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = {
            name: null,
            vehicles: []
        }

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

        if (this.state.name) {
            return <div>
                <h1>hello, {this.state.name ? this.state.name : 'World'}!</h1>
                <p>For change your username</p> <a href="" onClick={event => {
                    event.preventDefault()
                    this.props.onClicked()
                }}>click here</a>
                <button onClick={() => {
                    delete sessionStorage.token
                    this.props.onLoggedOut()
                }}>Logout</button>
                <form onSubmit={event => {
                    event.preventDefault()


                    var query = event.target.query.value

                    try {
                        searchVehicles(query, (error, vehicles) => {
                            if (error)  return alert(error.menssage)

                            this.setState({ vehicles })
                            
                        })
                    }
                    catch (error) {
                        alert(error.menssage)
                    }
                }}>
                    <input type="text" name="query" placeholder="search" />
                    <button>Search</button>
                </form>
                {!! this.state.vehicles.length && <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                            <a onClick = {event=>{
                                event.preventDefault()
                                const id = vehicle.id
                                this.props.onClickedDetail({id})
                                
                            }
                                
                            }>{vehicle.name}</a>
                            <img src={vehicle.thumbnail} />
                            <span>{vehicle.price} $</span>

                    </li>)}
                </ul>

                }

            </div>
        }
        else { return null }
    }

}

