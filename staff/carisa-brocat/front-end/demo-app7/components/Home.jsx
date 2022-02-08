const { useState, useEffect } = React

function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    const [query, setQuery] = useState(null)
    const [city, setCity] = useState(null)
    const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)

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
    
                const{name, city} = user
    
                setName(name)
                setCity(city)
            })  
        } catch (error) {
            alert(error.message)
            delete sessionStorage.token
    
            onLoggedOut()
        } 
    }, [])

    const loggedOut = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const showClientFavs = () => setView('clientFavs')

    const showCart = () => setView('cart')

    const showResults = query => {
        setQuery(query) 
        setView('results')
    }

    const showDetails = vehicleId => {
        setVehicleId(vehicleId)
        setView('detail')
    }

    logger.debug('Home -> Render')
        if (name) {
            return <div>
                <h1>Hello, {name}</h1>
                <button onClick={loggedOut}>Logout</button>

                <button
                    onClick={showClientFavs}
                >Favs</button>

                <button
                    onClick={showCart}
                >Cart</button>

                {city && <Forecast apiKey={apiKey} city={city} />}

                <Search onQuery={showResults} />

                {view === 'results' && <Results
                    query={query}
                    onItemClick={showDetails}
                />}

                {view === 'detail' && <Detail
                    itemId={vehicleId}
                />}

                {view === 'clientFavs' && <ClientFavs
                    onItemClick={showDetails} />}

                {view === 'cart' && <Cart
                    onItemClick={showDetails} />}

            </div>
        }
        else {
            return null
        }

}

