import { useState, useEffect } from 'react'
import logger from '../logger'
import retrieveUser from '../logic/retrieve-user'
import Forecast from './Forecast'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Favs from './Favs'
import Cart from './Cart'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'

function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    const [city, setCity] = useState(null)
    const [search, setSearch] = useSearchParams()
    const [query, setQuery] = useState(search.get('q'))
    // const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)
    const navigate = useNavigate()

    const apiKey = '73KP3CVXGQF33DT6QHF9JVD7B'

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
        setQuery(query)
        //setView('results')
        navigate(`search?q=${query}`)
    }

    const showDetail = vehicleId => {
        // setVehicleId(vehicleId)
        //setView('detail')
        navigate(`vehicles/${vehicleId}`)
    }

    logger.debug('Home -> render')

    if (name)
        return <div>
            <h1>Hello, {name}!</h1>

            <button onClick={showFavs}>Favs</button>

            <button onClick={showCart}>Cart</button>

            <button onClick={logout}>Logout</button>

            {city && <Forecast apiKey={apiKey} city={city} />}

            <Search query={query} onQueryChange={showResults} />

            {/* {view === 'results' && <Results
                query={query}
                onItemClick={showDetail}
            />} */}

            {/* {view === 'detail' && <Detail itemId={vehicleId} />} */}

            {view === 'favs' && <Favs onItemClick={showDetail} />}

            {view === 'cart' && <Cart onItemClick={showDetail} />}

            <Routes>
                <Route path="search" element={<Results query={query} onItemClick={showDetail} />} />
                <Route path="vehicles/:vehicleId" element={<Detail />} />
                {/* <Route path="favs" ... /> */}
                {/* <Route path="cart" ... /> */}
            </Routes>
        </div>
    else return null
}

export default Home