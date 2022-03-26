class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicles: null,
    };
  }

  goBack = () => this.setState({ id: null })

  componentWillReceiveProps(props) {
    logger.debug("Results -> component will receive props");

    try {
      searchVehicles(
        sessionStorage.token,
        this.props.query,
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
                  key={vehicle.id}
                  id={vehicle.id}
                  goDetails={() => this.setState({ id: vehicle.id })}
                />
              ))}
            </ul>
          );
        } else {
          return (
            <Details
              id={this.state.id}
              goBack={this.goBack}
            />
          );
        }
      } else
        return (
          <h3 className="error">
            Ups! Nothing was found with "{this.props.query}".
          </h3>
        );
    } else return null;
  }
}
