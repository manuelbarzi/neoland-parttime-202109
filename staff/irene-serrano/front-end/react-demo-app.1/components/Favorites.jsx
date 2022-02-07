class Favourites extends React.Component {
  constructor() {
    super();

    this.state = {
      favVehicles: [],
    };
  }

  componentDidMount() {
    retrieveUser(sessionStorage.token, (error, user) => {
      if (error) console.log(error.message);
      else {
        let userFavs = user.favs;
        let favVehicles = [];
        this.setState({ userFavs });
        //   let favVehicles = []

        if (userFavs) {
          userFavs.map((id) => {
            retrieveVehicle(sessionStorage.token, id, (error, vehicle) => {
              if (error) console.log(error.message);
              else {
                favVehicles.push(vehicle);

                this.setState({ favVehicles });
              }
            });
          });
        }
      }
    });
  }

  render() {
    let favVehicles = this.state.favVehicles;
    return (
      <div className="favs-container panel favs-panel">
        <h2>Your favorites</h2>

        {this.state.userFavs ? (
          <ul className="favs-list-container">
            {favVehicles.map((vehicle) => {
              return (
                <li className="favs-list-item" key={vehicle.id}>
                  <img className="favs-list-item-img" src={vehicle.image}></img>
                  <p className="favs-list-item-name">{vehicle.name}</p>
                  <p className="favs-list-item-price">{vehicle.price}$</p>
                  <span
                    onClick={() =>
                      console.log("TODO => onclick to delte fav vehicle")
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
          <h3 className="error">You don't have favourites yet. Go explore!</h3>
        )}
      </div>
    );
  }
}
