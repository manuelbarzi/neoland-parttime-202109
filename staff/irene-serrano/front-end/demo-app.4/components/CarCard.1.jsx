var favs = [];

class CarCard extends React.Component {
  constructor() {
    super();
    this.state = { vehicle: null };
  }

  componentDidMount() {
    retrieveVehicle(this.props.vehicle.id, (error, vehicle) => {
      this.setState({ vehicle: vehicle });
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.vehicle !== this.state.vehicle) this.render();
  }

  render() {
    return (
      <li className="flex-item card">
        <img src={this.props.vehicle.thumbnail} />
        <h2>{this.props.vehicle.name}</h2>
        <span>{this.props.vehicle.price}$</span>

        {this.state.vehicle === null ||
        this.state.vehicle === undefined ? null : (
          <div className="card-details">
            <p className="card-description">{this.state.vehicle.description}</p>
            <p className="card-year">{this.state.vehicle.year}</p>
            <a href={this.state.vehicle.url} target="_blank">
              Go to original website
            </a>
          </div>
        )}

        <button
          className="item-fav-btn"
          onClick={(e) => {
            e.preventDefault();

            console.log(this);
            console.log(favs);

            if (favs.includes(this.props.vehicle.id)) {
              e.target.innerText = "★";

              var deleteIndex = favs.indexOf(this.props.vehicle.id);
              favs.splice(deleteIndex, 1);
              toggleFavorite(
                sessionStorage.token,
                { favs },
                (error, user) => console.log
              );
            } else {
              e.target.innerText === "☆";
              favs.push(this.props.vehicle.id);
              toggleFavorite(
                sessionStorage.token,
                { favs },
                (error, user) => console.log
              );
            }

            /* e.target.innerText === "☆"? e.target.innerText = "★" : e.target.innerText = "☆"
             function patch user with fav car */
            favs.push(this.props.vehicle.id);
            toggleFavorite(
              sessionStorage.token,
              { favs },
              (error, user) => console.log
            );
          }}
        >
          {favs.includes(this.props.vehicle.id) ? "★" : "☆"}
        </button>
      </li>
    );
  }
}
