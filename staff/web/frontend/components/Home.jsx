// function Home() {
//     return <h1>Hello, World!</h1>
// }
class Home extends React.Component {
    constructor() {
        logger.debug('Home -> constructor')

        super()

        this.state = {
            name: null,
            city: null,
            query: 'hulk',
            vehicles: [],
            view: 'results'
        }
        this.apiKey = 'JAFQ7QZWLP9LPYBJ5PXTYSMAX'
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

                this.setState({ name: user.name,city:user.city })

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
            return <div className='contenedor_home'>
                <h1>hello, {this.state.name ? this.state.name : 'World'}!</h1>
                <p>For change your username</p> <a href="" onClick={event => {
                    event.preventDefault()
                    this.props.onClicked()
                }}>click here</a>
                <button onClick={() => {
                    delete sessionStorage.token
                    this.props.onLoggedOut()
                }}>Logout</button>

                {this.state.city && <Forecast apiKey={this.apiKey} city={this.state.city} />}

                <button onClick={event =>{
                    event.preventDefault()
                    this.props.onClickedFav()
                }
                } ></button>

                <Search onQuery={query => this.setState({ query, view: 'results' })} />
                {this.state.view === 'results' && <Results
                    query={this.state.query}
                    onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}
                />}
                {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}
            </div>
        }
        else { return null }
    }

}

