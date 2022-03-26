import { useState, useEffect } from 'react';

import retrieveFavVehicles from '../logic/retrieve-fav-vehicles';

function Favorites (){
  const [favVehicles, setFavVehicles] = useState([])



  useEffect(() => {

    try {
        retrieveFavVehicles(sessionStorage.token, (error, vehicles) => {
            if (error) return alert(error.message)

            setFavVehicles(vehicles)

        })
    } catch (error) {
        return alert(error.message)
    }
}, [])

    return (
      <div className="favs-container panel favs-panel">
        <h2>Your favorites</h2>

        {favVehicles ? (
          <ul className="favs-list-container">
            {favVehicles.map((vehicle) => {
              return (
                <li className="favs-list-item" key={vehicle.id}>
                  <img className="favs-list-item-img" src={vehicle.image} alt={vehicle.name}></img>
                  <p className="favs-list-item-name">{vehicle.name}</p>
                  <p className="favs-list-item-price">{vehicle.price}$</p>
                  <span
                    onClick={() =>
                      alert("TODO => onclick to delte fav vehicle")
                    }
                    className="favs-list-item-delete selectable"
                  >
                    🗑️
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 className="error">You don't have favorites yet. Go explore!</h3>
        )}
      </div>
    );
}

export default Favorites