const { useState, useEffect } = React;

function CarCard ({id, goDetails }){
  const [vehicle, setVehicle] = useState(null);

  const toggleFav = () => {    
    try {
      toggleFavVehicle(
        sessionStorage.token,
        id,
        (error) => {
          if (error) {
            return alert(error.message);
          } else {
            const update = {};
          

            for (const key in vehicle) {
              update[key] = vehicle[key];
            }
            if (update.isFav === null) {
              update.isFav = false;
            }
            update.isFav = !update.isFav;


            // TODO No se setea bien el estado, problema con la variable 'update'
            setVehicle({ vehicle: update });
           
          }
        }
      );
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect (() => {
    logger.debug('Results -> component did mount & component will receive props')

    try {
      retrieveVehicle(sessionStorage.token, id, (error, vehicle) => {
        if (error) {
          return alert(error.message);
        } else {
          
          setVehicle( vehicle );
        }
      });
      
    } catch (error) {
      alert(error.message);
    } 
  }, [id])


  return (
    vehicle && <li className="results-item" >
      <img className="result-img" src={vehicle.image} onClick={goDetails}/>
      <h2 className="result-title">{vehicle.name}</h2>
      {vehicle ? (
        <Fav 
          selected={
          vehicle.isFav === null
              ? false
              : vehicle.isFav
          }
          onClick={toggleFav}
        />
      ) : null}
      <span className="result-price">{vehicle.price}$</span>
    </li>
  
  );
}


