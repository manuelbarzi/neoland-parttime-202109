import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieve-user'
import Forecast from './Forecast'
import Search from './Search'

function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    const [query, setQuery] = useState(null)
    const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)
    const [city, setCity] = useState(null)

    const apiKey = '73KP3CVXGQF33DT6QHF9JVD7B'

    useEffect(() => {
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

    const showModifyData = event => {
        event.preventDefault()

        onModifyClick()
    }

    const showFavorites = event => {
        event.preventDefault()

        onClickedFav()
    }

    const showCart = event => {
        event.preventDefault()

        onClickedCart()
    }

    const logout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const showResults = query => {
        setView('results')
        setView(query)
    }

    const showDetail = vehicleId => {
        setView('detail')
        setView(vehicleId)
    }

    if (name) {
        return <div>
            <h1>Hola, {name} !</h1>
            <button className="button" onClick={showModifyData}>Modificar datos</button>

            <button className="button" onClick={logout}>Cierra sesión</button>


            <button className="button" onClick={showFavorites}>Favoritos</button>

            <button className="button" onClick={showCart}>Cesta</button>

            <Forecast apiKey={apiKey} city={city} />

            <Search
                query={query}
                onQuery={showResults}
            />

            {view === 'results' && <Results
                query={query}
                onItemClick={showDetail}
            />}

            {view === 'detail' && <Detail itemId={vehicleId} />}
        </div>
    } else
        return null
}

export default Home