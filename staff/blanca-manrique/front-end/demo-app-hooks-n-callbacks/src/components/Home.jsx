import { useState, useEffect } from 'react'
import logger from '../logger'
import retrieveUser from '../logic/retrieve-user'
import Forecast from './Forecast'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Favorites from './Favorites'
import Cart from './Cart'
import './Home.css'

function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    const [query, setQuery] = useState(null)
    const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)
    const [city, setCity] = useState('Madrid')
    const apiKey = 'KT4VXZB23YF5HY2MZA328NVWT'

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

    const logout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const goToFavs = () => {
        setView('favorites')
    }
    const goToCart = () => {
        setView('cart')
    }

    const goToProfile = () => {
        setView('profile')
    }

    const showResults = query => {
        setQuery(query)
        setView('results')
    }

    const showDetail = vehicleId => {
        setVehicleId(vehicleId)
        setView('detail')
    }

    const goBack = () => {
        setView('results')
    }

    if (name)
        return <div className='home'>
            <h1 className='home__title'>Hello, {name} !</h1>

            {city && <Forecast apiKey={apiKey} city={city} />}

            <div className='home__nav'>
                <button className='btn' onClick={logout}>Logout</button>

                <button className='btn' onClick={goToFavs} >Favorites</button>

                <button className='btn' onClick={goToCart}>Cart</button>

                <button className='btn' onClick={goToProfile}>Profile</button>

            </div>

            <Search query={query} onQueryChange={showResults} />

            {view === 'results' && <Results
                query={query}
                onItemClick={showDetail}
            />}

            {view === 'detail' && <Detail
                itemId={vehicleId}
                onReturnClick={goBack}
            />}

            {view === 'favorites' && <Favorites
                onReturnClick={goBack}
                onItemClick={showDetail}
            />}

            {view === 'cart' && <Cart
                onReturnClick={goBack}
                onItemClick={showDetail}
            />}
        </div>
    else return null
}

export default Home 