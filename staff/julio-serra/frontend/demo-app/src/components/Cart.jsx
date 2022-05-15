import { Component } from "react";
import retrieveVehiclesFromCart from "../logic/retrieve-vehicles-from-cart";
import toggleFavVehicle from "../logic/toggle-fav-vehicle";
import addVehiclesToCart from "../logic/add-vehicles-to-cart";
import removeVehiclesFromCart from "../logic/remove-vehicles-from-cart";
import Fav from "./Fav";

class Cart extends Component {
  constructor() {
    super();
    this.state = { vehicles: null };
  }

  componentDidMount() {
    try {
      retrieveVehiclesFromCart(sessionStorage.token, (error, vehicles) => {
        if (error) return alert(error.message);
        this.setState({ vehicles });
      });
    } catch (error) {
      alert(error.message);
    }
  }

  toggleFav = (vehicle) => {
    try {
      toggleFavVehicle(sessionStorage.token, vehicle.id, (error) => {
        if (error) return alert.message;
        const update = { ...vehicle, isFav: !vehicle.isFav };

        const vehicles = this.state.vehicles.map((_vehicle) => {
          if (_vehicle.id === vehicle.id) return update;
          return _vehicle;
        });
        this.setState({ vehicles });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  addToCart = (vehicle) => {
    try {
      addVehiclesToCart(sessionStorage.token, vehicle.id)
        .catch((error) => alert(error.message))

        .then(() => {
          const update = { ...vehicle, qty: vehicle.qty + 1 };

          const vehicles = this.state.vehicles.map((_vehicle) => {
            if (_vehicle.id === vehicle.id) return update;
            return _vehicle;
          });
          this.setState({ vehicles });
        });
    } catch (error) {
      alert(error.message);
    }
  };

  removeFromCart = (vehicle) => {
    try {
      removeVehiclesFromCart(sessionStorage.token, vehicle.id, (error) => {
        if (error) return alert(error.message);
        const update = { ...vehicle, qty: vehicle.qty - 1 };
        let vehicles;

        if (update.qty > 0)
          vehicles = this.state.vehicles.map((_vehicle) => {
            if (_vehicle.id === vehicle.id) return update;
            return _vehicle;
          });
        else
          vehicles = this.state.vehicles.filter(
            (_vehicle) => _vehicle.id !== vehicle.id
          );
        this.setState({ vehicles });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  clickItem = (id) => this.props.onItemClick(id);

  render() {
    if (this.state.vehicles) {
      if (this.state.vehicles.length)
        return (
          <div>
            <ul>
              {this.state.vehicles.map((vehicle) => (
                <li key={vehicle.id}>
                  <h2>{vehicle.name}</h2>
                  <Fav
                    selected={vehicle.isFav}
                    onClick={() => this.toggleFav(vehicle)}
                  />

                  <button onClick={() => this.addToCart(vehicle)}>
                    Add to Cart
                  </button>
                  <button onClick={() => this.removeFromCart(vehicle)}>
                    Remove cart
                  </button>

                  <img
                    src={vehicle.image}
                    onClick={() => this.props.clickItem(vehicle.id)}
                    alt=""
                  />
                  <span>
                    {vehicle.qty} x {vehicle.price} $
                  </span>
                  <hr />
                  <span>Subtotal {vehicle.qty * vehicle.price} $</span>
                </li>
              ))}
            </ul>
            <hr />
            <span>
              TOTAL{" "}
              {this.state.vehicles.reduce(
                (accum, vehicle) => accum + vehicle.price * vehicle.qty,
                0
              )}{" "}
              $
            </span>
          </div>
        );
      else return <p>No items :(</p>;
    } else return null;
  }
}

export default Cart;
