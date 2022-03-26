class Forecast extends React.Component {
  constructor() {
    super();

    this.state = {
      values: null,
    };
    this.apiKey = "D9GQMSPXZ48742LH6XJ362P5B";
  }

  getForecast = () => {
    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          this.setState({ feedback: error.message });
          return;
        }
        this.setState({ city: user.city });

        retrieveForecast(this.apiKey, this.state.city, (error, values) => {
          if (error) {
            return console.error(error.message);
          } else {
            this.setState({ values });
          }
        });
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  componentDidMount() {
    this.getForecast();
  }
  render() {
    if (this.state.values && this.state.city) {
      const tempValues = this.state.values;

      return (
        <div className="forecast-container panel_mini">
          <h3 className="forecast-title vertical-cont">
            El tiempo en{" "}
            <span className="forecast-title capitalize">{this.state.city}</span>
          </h3>

          {tempValues.map((day) => {
            return (
              <Temperature
                max={day.maxt}
                min={day.mint}
                conditions={day.conditions}
                key={day.datetime}
                date={day.datetime}
              />
            );
          })}
        </div>
      );
    }
    return null;
  }
}
