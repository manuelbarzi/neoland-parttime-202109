const { useState, useEffect } = React


function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    const [city, setCity] = useState(null)
    const [query, setQuery] = useState(null)
    const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)

    const apiKey = 'JAFQ7QZWLP9LPYBJ5PXTYSMAX'

    useEffect(() => {
        logger.debug('Home -> did mount')

        try {
            retrieveUser(token, (error, user) => {
                if (error) {
                    alert(error.message)

                    delete sessionStorage.token

                    onLoggedOut()

                    return
                }

                const { name, city } = user

                setName(name)
                setCity(city)
            })
        } catch (error) {
            alert(error.message)

            delete sessionStorage.token

            onLoggedOut()
        }
    }, [])

    const showFavs = () => {
        setView('favs')
    }

    const showCart = () => {
        setView('cart')
    }

    const logout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const showResults = query => {
        setView('results')
        setQuery(query)
    }

    const showDetail = vehicleId => {
        setVehicleId(vehicleId)
        setView('detail')
    }

    logger.debug('Home -> render')

    if (name)
        return <div>
            <h1>Hello, </h1>
            <h1>Hello, {name}!</h1>

            <button onClick={showFavs}>Favs</button>

            <button onClick={showCart}>Cart</button>

            <button onClick={logout}>Logout</button>

            {city && <Forecast apiKey={apiKey} city={city} />}

            <Search query={query} onQueryChange={showResults} />

            {view === 'results' && <Results
                query={query}
                onItemClick={showDetail}
            />}

            {view === 'detail' && <Detail itemId={vehicleId} />}

            {view === 'favs' && <Favorites onItemClick={showDetail} />}

            {view === 'cart' && <Cart onItemClick={showDetail} />}

        </div>
        else return null


}








// class Home extends React.Component {
//     constructor() {
//         logger.debug('Home -> constructor')

//         super()

//         this.state = {
//             name: null,
//             city: null,
//             query: 'hulk',
//             vehicles: [],
//             view: 'results'
//         }
//         this.apiKey = 'JAFQ7QZWLP9LPYBJ5PXTYSMAX'
//     }

//     componentWillMount() {
//         logger.debug('Home -> will mount')
//     }

//     componentDidMount() {
//         logger.debug('Home -> did mount')

//         try {
//             retrieveUser(this.props.token, (error, user) => {
//                 if (error) {
//                     alert(error.message)
//                     delete sessionStorage.token
//                     this.props.onLoggedOut()
//                 }

//                 this.setState({ name: user.name, city: user.city })

//             })
//         } catch (error) {
//             alert(error.message)
//             delete sessionStorage.token
//             this.props.onLoggedOut()
//         }
//     }

//     componentWillUnmount() {
//         logger.debug('Home -> will unmount')
//     }


//     render() {

//         logger.debug('Home -> render')

//         if (this.state.name) {
//             return <div className='contenedor_home'>
//                 <h1>hello, {this.state.name ? this.state.name : 'World'}!</h1>
//                 <p>For change your username</p> <a href="" onClick={event => {
//                     event.preventDefault()
//                     this.props.onClicked()
//                 }}>click here</a>
//                 <button onClick={() => {
//                     delete sessionStorage.token
//                     this.props.onLoggedOut()
//                 }}>Logout</button>

//                 {this.state.city && <Forecast apiKey={this.apiKey} city={this.state.city} />}

//                 <button onClick={event => {
//                     event.preventDefault()
//                     this.setState({ view: 'favs' })
//                 }
//                 } >💘</button>

//                 <button onClick={() => {
//                     this.setState({ view: 'cart' })
//                 }}>🛒</button>

//                 <Search onQuery={query => this.setState({ query, view: 'results' })} />
//                 {this.state.view === 'results' && <Results
//                     query={this.state.query}
//                     onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })}
//                 />}
//                 {this.state.view === 'detail' && <Detail itemId={this.state.vehicleId} />}

//                 {this.state.view === 'favs' && <Favorites onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })} />}

//                 {this.state.view === 'cart' && <Cart onItemClick={vehicleId => this.setState({ vehicleId, view: 'detail' })} />}
//             </div>
//         }
//         else { return null }
//     }

// }

