const {useState, useEffect} = React

function Detail({itemId}){
    const[vehicle, setVehicle] = useState(null)
    const[feedback, setFeedback] = useState(null)

    useEffect(()=>{
        logger.debug('Detail -> component did mount')

        try {
            retrieveVehicle(sessionStorage.token, itemId, (error, vehicle) => {
                if (error) {
                    return setFeedback(error.message)
                }
                else {
                    setVehicle(vehicle)
                }
            })

        }
        catch (error) {
            setFeedback(error.message)
        }
    }, [])

    const toggleFav = () => {
        try {
            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

                const update = {}

                for (const key in vehicle) {

                    update[key] = vehicle[key]
                }

                update.isFav = !update.isFav

                setVehicle(update)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const addToCart = () => {
        try {
            addCartVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

                return alert('Car Added successfully')
            })
        } catch (error) {
            alert(error.message)
        }
    }

    logger.debug('Detail -> render')

    if (vehicle) {
        return <div>
            <h2>{vehicle.name}</h2>
            <Fav selected={vehicle.isFav} onClick={toggleFav} />
            <img src={vehicle.image} />
            <p>{vehicle.descripction}</p>
            <p>{vehicle.year}</p>
            <p>{vehicle.price} $</p>
            <p>{vehicle.color}</p>
            <p>{vehicle.style}</p>
            <a href={vehicle.url}>original link</a>
            <button onClick={addToCart}
            >Add to Cart</button>
        </div>
    }
    else {
        return null
    }
}
