import { Component } from 'react'

import addVehicleToCart from '../logic/add-vehicle-to-cart'
import retrieveVehicle from '../logic/retrieve-vehicle';
import removeVehicleFromCart from '../logic/remove-vehicle-from-cart'

import logger from '../logger'

class Details extends Component {
  constructor() {
    super();
    this.state = {
      vehicle: null,
    };
  }

  addToCart = () => {
    alert("TODO => refine add/remove car from cart")
    try {
      addVehicleToCart(
        sessionStorage.token,
        this.props.id,
        (error) => {
          if (error) console.log(error);
          else console.log(this.props.id + " added to cart");
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  getVehicle =() => {
    try {
 
    retrieveVehicle(sessionStorage.token, this.props.id, (error, vehicle) => {
      if (error) {
        return console.log(error.message);
      } else {
        this.setState({ vehicle });
      }
    });
  } catch (error) {
    console.log(error.message);
  }}

  componentDidMount() {
   // logger.debug("DETAILS => DID MOUNT");
    this.getVehicle()
    
  }

  render() {
   

   // logger.debug("DETAILS => RENDER");
    return (
      <div>
        <span
          className="details-back-btn selectable"
          onClick={this.props.goBack}
        >←</span>

        {this.state.vehicle ? (
          <div>
            <h2 className="details-title">{this.state.vehicle.name}</h2>
            <img className="details-img" src={this.state.vehicle.image} />
            <p className="details-description">
              {this.state.vehicle.description}
            </p>

            <p className="details-year">{this.state.vehicle.year}</p>
            <a href={this.state.vehicle.url} className="link" target="_blank">
              Go to original website
            </a>

            <p className="details-price">{this.state.vehicle.price}$</p>

            <div className="details-btn-container">
              <button
                className="details-btn btn-full"
                onClick={this.addToCart}
              >
                Add to cart 🛒
              </button>

              {/* ======= TO-DO  ======= 
    -Inspeccionamos el carrito del usuario y:
        -Si no aparece el ID del coche actual => sólo permite añadir
        -Si aparece y qty >= 1 => nos aparece un boton +/- para añadir o quitar además de marcar cuántos elementos de ese coche hay en el carrito; además un boton de eliminar, que borra del carrito ese coche, independiente de la qty
 
         */}

              <button id="remove-from-cart"
                className="details-btn btn-full"
                onClick={() => {
                  try {
                    removeVehicleFromCart(
                      sessionStorage.token,
                      this.props.id,
                      (error) => {
                        if (error){ 
                          console.log(error)
                       
                        }
                        else console.log(this.props.id + " removed from cart");
                      }
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Remove 🗑️
              </button>
              <button className="details-btn link ">View cart</button>
            </div>
          </div>
        ) : (
          <h1>Vehicle not found</h1>
        )}
      </div>
    );
  }
}

export default Details