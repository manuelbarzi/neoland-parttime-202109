class CarCard extends React.Component {
  constructor() {
    super();
    this.state = { vehicle: null };

  }

  componentDidMount(){
    try {
      retrieveVehicle(sessionStorage.token, this.props.id, (error, vehicle) => {
        if (error) {
          return alert(error.message);
        } else {
          this.setState({ vehicle });
        }
      });
      
    } catch (error) {
      alert(error.message);
    }

  

  }

  render() {

    return (
      this.state.vehicle && <li className="results-item" >
        <img className="result-img" src={this.state.vehicle.image} onClick={this.props.goDetails}/>
        <h2 className="result-title">{this.state.vehicle.name}</h2>
        {this.state.vehicle ? (
          <Fav 
            selected={
              this.state.vehicle.isFav === null
                ? false
                : this.state.vehicle.isFav
            }
            onClick={() => {
             
              try {
                toggleFavVehicle(
                  sessionStorage.token,
                  this.props.id,
                  (error) => {
                    if (error) {
                      return alert(error.message);
                    } else {
                     

                      const update = {};
                      const vehicle = this.state.vehicle;

                      for (const key in vehicle) {
                        update[key] = vehicle[key];
                      }
                      if (update.isFav === null) {
                        update.isFav = false;
                      }
                      update.isFav = !update.isFav;

                      this.setState({ vehicle: update });
                     
                    }
                  }
                );
              } catch (error) {
                alert(error.message);
              }
            }}
          />
        ) : null}
        <span className="result-price">{this.state.vehicle.price}$</span>
 {/*        <div></div>

    
        {this.state.vehicle === null ||
        this.state.vehicle === undefined ? null : (
          <div className="card-details">
            <p className="card-description">{this.state.vehicle.description}</p>
            <p className="card-year">{this.state.vehicle.year}</p>
            <a href={this.state.vehicle.url} className="link" target="_blank">
              Go to original website
            </a>
          </div>
        )} */}
      </li>
    
    );
  }
}
