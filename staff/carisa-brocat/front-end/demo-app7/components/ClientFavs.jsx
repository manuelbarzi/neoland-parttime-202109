const {useState, useEffect} = React

function ClientFavs(){
    const [favsVehicles, sefavsVehicles] = useState(null)
    
    useEffect(() => {
        logger.debug('ClientFavs -> Component did Mount')
        try {
            retrieveFavsVehicles(sessionStorage.token, (error, favsVehicles) => {
                if (error) alert(error.message)

                sefavsVehicles(favsVehicles)
            })

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const  toggleFav = id => {
        try {
            toggleFavVehicle(sessionStorage.token, id, error => {
                if (error) return alert(error.message)

                const vehicles = this.state.favsVehicles.filter(_vehicle => _vehicle.id !== id)

                this.setState({ favsVehicles: vehicles })

            })
        } catch (error) {
            alert(error.message)
        }
    }

    const clickItem = id => this.props.onItemClick(id)

    const addToCart = id => {
        try {
            addCartVehicle(sessionStorage.token, id, error => {
                if (error) return alert(error.message)

                return alert('Car Added successfully')
            })
        } catch (error) {
            alert(error.message)
        }
    }

    logger.debug('ClientFavs -> render')

        if (favsVehicles) {
            if (favsVehicles.length) {
                return <ul>
                    {favsVehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => toggleFav(vehicle.id)} />
                        <img src={vehicle.image} onClick={() => clickItem(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                        <button onClick={() => addToCart(vehicle.id)}
                        >Add to Cart</button>
                    </li>)}
                </ul>
            } else {
                return <p>You dont have selected any favs car yet</p>
            }
        }
        return null

}
