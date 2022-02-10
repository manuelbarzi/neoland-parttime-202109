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
import { Routes, Route, useNavigate, useSearchParams} from 'react-router-dom'

function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    const [city, setCity] = useState('Madrid')
    const apiKey = 'KT4VXZB23YF5HY2MZA328NVWT'
    const [search, setSearch] = useSearchParams()
    const [query, setQuery] = useState(search.get('q'))
    // const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        logger.debug('Home -> did mount')

        try {
            retrieveUser(token)
                .then(user => {
                    const { name } = user

                    setName(name)
                })
                .catch(error =>{
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

    const logout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const goToFavs = () => {
        navigate('favorites')
    }
    const goToCart = () => {
        navigate('cart')
    }

    const goToProfile = () => {
        setView('profile')
    }

    const showResults = query => {
        setQuery(query)
        navigate(`search?q=${query}`)
    }

    const showDetail = vehicleId => {
        navigate(`vehicles/${vehicleId}`)
    }

    const goBack = () => {
        // setView('results')
        navigate('search')
    }

    if (name)
        return <div className='home'>
            <h1 className='home__title'>Hello, {name} !</h1>

            <Forecast apiKey={apiKey} city={city} />

            <div className='home__nav'>
                <button className='btn' onClick={logout}>Logout</button>

                <button className='btn' onClick={goToFavs} >Favorites</button>

                <button className='btn' onClick={goToCart}>Cart</button>

                <button className='btn' onClick={goToProfile}>Profile</button>

            </div>

            <Search query={query} onQueryChange={showResults} />

            {/* {view === 'results' && <Results
                query={query}
                onItemClick={showDetail}
            />} */}

            {/* {view === 'detail' && <Detail
                itemId={vehicleId}
                onReturnClick={goBack}
            />} */}

            {/* {view === 'favorites' && <Favorites
                onReturnClick={goBack}
                onItemClick={showDetail}
            />} */}

            {/* {view === 'cart' && <Cart
                onReturnClick={goBack}
                onItemClick={showDetail}
            />} */}

            <Routes >
                <Route path='search' element={<Results query={query} onItemClick={showDetail}/>}/>
                <Route path='vehicles/:vehicleId' element={<Detail onReturnClick={goBack}/>}/>
                <Route path='favorites' element={<Favorites onReturnClick={goBack} onItemClick={showDetail}/>}/>
                <Route path='cart' element={<Cart onReturnClick={goBack} onItemClick={showDetail}/>} />
            </Routes>

        </div>
    else return null
}

export default Home 