
import { useState, useEffect } from 'react'
import logger from '../logger'
import searchVehicles from '../logic/search-vehicles'
import toggleFavVehicle from '../logic/toggle-fav-vehicle'
import Fav from './Fav'


function Results({ query, onItemClick }) {
    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        logger.debug('Results -> component did mount & component will receive props')

        try {
            searchVehicles(sessionStorage.token, query, (error, vehicles) => {
                if (error) return alert(error.message)

                setVehicles(vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const toggleFav = vehicle => {
        try {
            toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
                if (error) return alert(error.message)

                const update = {}

                for (const key in vehicle)
                    update[key] = vehicle[key]

                update.isFav = !update.isFav

                const _vehicles = vehicles.map(_vehicle => {
                    if (_vehicle.id === vehicle.id)
                        return update

                    return _vehicle
                })

                setVehicles(_vehicles)

            })
        } catch (error) {
            alert(error.message)
        }
    }

    const clickItem = id => onItemClick(id)

    logger.debug('Results -> render')

        if (vehicles) {
            if (vehicles.length)
                return <ul>
                    {vehicles.map(vehicle => <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <Fav selected={vehicle.isFav} onClick={() => toggleFav(vehicle)} />
                        <img src={vehicle.thumbnail} onClick={() => clickItem(vehicle.id)} />
                        <span>{vehicle.price} $</span>
                    </li>)}
                </ul>
            else
                return <p>No results :(</p>
        } else
            return null
}

export default Results




// class Results extends React.Component {
//     constructor() {
//         logger.debug('Results -> constructor')

//         super()

//         this.state = { vehicles: null }
//     }

//     componentDidMount() {
//         logger.debug('Results -> component did mount')

//         try {
//             searchVehicles(sessionStorage.token, this.props.query, (error, vehicles) => {
//                 if (error) return alert(error.message)

//                 this.setState({ vehicles })
//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     componentWillReceiveProps(props) {
//         logger.debug('Results -> component will receive props')

//         try {
//             searchVehicles(sessionStorage.token, props.query, (error, vehicles) => {
//                 if (error) return alert(error.message)

//                 this.setState({ vehicles })
//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     }


//     //Métodos de la clase:

//     goToToggleFav = vehicle => {
//         try {
//             toggleFavVehicle(sessionStorage.token, vehicle.id, error => {
//                 if (error) return alert(error.message)

//                 const update = {}

//                 for (const key in vehicle)
//                     update[key] = vehicle[key]

//                 update.isFav = !update.isFav

//                 const vehicles = this.state.vehicles.map(_vehicle => {
//                     if (_vehicle.id === vehicle.id)
//                         return update

//                     return _vehicle
//                 })

//                 this.setState({ vehicles: vehicles })

//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     }


//     render() {
//         logger.debug('Results -> render')

//         if (this.state.vehicles) {
//             if (this.state.vehicles.length)
//                 return <ul>
//                     {this.state.vehicles.map(vehicle => <li key={() => vehicle.id}>
//                         <h2>{vehicle.name}</h2>
//                         <Fav selected={vehicle.isFav} onClick={() => this.goToToggleFav(vehicle)} />
//                         <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)} />
//                         <span>{vehicle.price} $</span>
//                     </li>)}
//                 </ul>
//             else
//                 return <p>No results :(</p>
//         } else
//             return null

//     }
// }