import { useState, useEffect } from 'react'
import logger from '../logger'
import retrieveUser from '../logic/retrieve-user'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Favorites from './Favorites'
import Forecast from './Forecast'
import Cart from './Cart'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'


function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    const [city, setCity] = useState(null)
    const [search, setSearch] = useSearchParams()
    const [query, setQuery] = useState(null)
    //const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)
    const navigate = useNavigate()

    const apiKey = 'JAFQ7QZWLP9LPYBJ5PXTYSMAX'

    useEffect(() => {
        logger.debug('Home -> did mount')

        try {
            retrieveUser(token)
                .then(user => {
                    const { name, city } = user

                    setName(name)
                    setCity(city)
                })
                .catch(error => {
                    alert(error.message)

                    delete sessionStorage.token

                    onLoggedOut()
                })
        } catch (error) {
            alert(error.message)

            delete sessionStorage.token

            onLoggedOut()
        }
    }, [])

    const showFavs = () => {
        navigate(`favs`)
    }

    const showCart = () => {
        setView('cart')
    }

    const logout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const showResults = query => {

        setQuery(query)
        navigate(`search?q=${query}`)
    }

    const showDetail = vehicleId => {
        navigate(`vehicles/${vehicleId}`)
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

            {/* {view === 'results' && <Results
                query={query}
                onItemClick={showDetail}
            />}

            {view === 'detail' && <Detail itemId={vehicleId} />} */}

            {/* {view === 'favs' && <Favorites onItemClick={showDetail} />} */}

            {view === 'cart' && <Cart onItemClick={showDetail} />}

            <Routes>
                <Route path="search" element={<Results query={query} onItemClick={showDetail} />} />
                <Route path="vehicles/:vehicleId" element={<Detail />} />
                <Route path="favs"  element={<Favorites onItemClick={showDetail}/>} />
                {/* <Route path="cart" ... /> */}
            </Routes>

        </div>
    else return null


}

export default Home






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

