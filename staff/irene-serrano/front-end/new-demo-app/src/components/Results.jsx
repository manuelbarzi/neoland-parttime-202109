import { Component } from "react";

import  searchVehicles  from '../logic/search-vehicles';
import  logger  from "../logger";

import Details from './Details'
import CarCard from './CarCard'

class Results extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: null,
    };
  }
  goBack = () => this.setState({ id: null });
  clickItem = id => onItemClick(id)

/* HOOKS CODE:  
 const goBack = () => this.setState({ id: null });
  const clickItem = id => onItemClick(id) */

  componentWillReceiveProps({query, onItemClick}) {
    //logger.debug("Results -> component will receive props");

    try {
      searchVehicles(
        sessionStorage.token,
        query,
        (error, vehicles) => {
          if (error) return alert(error.message);

          this.setState({ vehicles });
        }
      );
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    if (this.state.vehicles) {
      if (this.state.vehicles.length) {
        if (this.state.id === null || this.state.id === undefined) {
          return (
            <ul className="results">
              {this.state.vehicles.map((vehicle) => (
                <CarCard
                  onClick={()=>this.clickItem(vehicle.id)}
                  key={vehicle.id}
                  id={vehicle.id}
                  goDetails={() => this.setState({ id: vehicle.id })}
                />
              ))}
            </ul>
          );
        } else {
          return <Details id={this.state.id} goBack={this.goBack} />;
        }
      } else
        return (
          <h3 className="error">
            Ups! Nothing was found with "{query}".
          </h3>
        );
    } else return null;
  }
}
export default Results;
