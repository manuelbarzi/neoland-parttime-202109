class Temperature extends React.Component {
  constructor() {
    super();
  }

  render() {
   var date = this.props.date
   var currDate = new Date(date)
   var currDay = currDate.toString().slice(0,3)
   var currNum = currDate.toString().slice(8,10)
   
    return (
      <div className="temperature-container vertical-cont">
        <h4 className="temperature-day ">{currDay + ' ' + currNum}</h4>

        {this.props.conditions === "Clear" ? (
          <span className="temperature-icon">☀️</span>
        ) 
        : this.props.conditions === "Partially cloudy" ? (
          <span className="temperature-icon">🌤️</span>
        ) 
        : this.props.conditions === "Squalls" ? (
          <span className="temperature-icon">🌦️</span>
        ) 
        : this.props.conditions === "Overcast" ? (
            <span className="temperature-icon">☁️</span>
          ) 
          : this.props.conditions === "Rain" ||  this.props.conditions === "Rain, Overcast"  ? (
            <span className="temperature-icon">🌧️</span>
          ) 
          :this.props.conditions === "Snow" ? (
            <span className="temperature-icon">🌨️</span>
          ) 
          :this.props.conditions === "Fog" || this.props.conditions === "Mist" ? (
            <span className="temperature-icon">🌫️</span>
          ) 
          :this.props.conditions === "Storm" || this.props.conditions === "Thunderstorm"? (
            <span className="temperature-icon">⛈️</span>
          ) 
          :(
          <span className="temperature-icon">⭕</span>
        )}

        <div className="temperature-show vertical-cont">
          <div className="horizontal-cont">
            <h2 className="temperature-min">{this.props.min}ºC</h2>
            <h2 className="temperature-max">{this.props.max}ºC</h2>
          </div>
        </div>
      </div>
    );
  }
}
