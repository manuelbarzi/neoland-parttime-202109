

class Home extends React.Component {
    constructor() {

        logger.debug('Home --> constructor')

        super()

        this.state = {
            name: null,
            vehicles: {}
        }
    }

    componentWillMount(){
        logger.debug('Home --> will mount')
    }

    //uso el método didMount, (ciclo de vida)
    componentDidMount() {  //método cuando ya se ha montado el componente en el DOM virtual, aparece después de pintar la 1era vez



        logger.debug('Home --> did mount')

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

    componentWillUnmount(){
        logger.debug('Home --> will unmount')
    }

    render() {                  //este if, para que no muestre la palabra "world" antes del nombre

        logger.debug('Home --> render')

        if (this.state.name) {
            return <div>
                <h1>Hello, {this.state.name ? this.state.name : 'World'}!</h1>



                <button onClick={event => {
                    event.preventDefault()
                    this.props.onClicked()
                }}>Change User</button>

                {/* <p>Change your username</p> <a href="" onClick={event => {
                    event.preventDefault()
                    this.props.onClicked()
                }}>Click here</a> */}


                <button onClick={() => {
                    delete sessionStorage.token
                    this.props.onLoggedOut()
                }} > Logout </button>


                <form onSubmit={event => {
                    event.preventDefault()
                    var query = event.target.query.value

                    try {
                        searchVehicles(query, (error, vehicles) => {
                            if (error) return alert(error.message)
                            this.setState({vehicles})
                        })
                    } catch (error) {
                        alert(error.message)

                    }
                }}
                >
                    <input type="text" name="query" placeholder="criteria" />
                    <button>Search</button>

                </form>

                {!!this.state.vehicles.length && <ul>
                    {this.state.vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.thumbnail} />
                        <span>{vehicle.price} $ </span>

                    </li>)}

                </ul>}

            </div>




        } else {
            return null
        }


    }
}



