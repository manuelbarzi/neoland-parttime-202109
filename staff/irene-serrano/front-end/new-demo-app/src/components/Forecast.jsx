import { React, Component } from 'react';
import  Temperature  from './Temperature';

import retrieveUser from '../logic/retrieve-user'
import retrieveForecast from '../logic/retrieve-forecast'

class Forecast extends Component {
  constructor() {
    super();

    this.state = {
      values: null,
    };
    this.apiKey = "D9GQMSPXZ48742LH6XJ362P5B";
  }

  getForecast = () => {
    try {
      retrieveUser(sessionStorage.token)
        .then(user=>{
          var city = user.city
          this.setState({ city })
          
          console.log(this.state)
          retrieveForecast(this.apiKey, this.state.city)
            .then((values)=>{
              console.log(values)
              this.setState({ values });
            }).catch(error=>{
              return console.error(error.message);
            })
        }).catch (error=>{
        this.setState({feedback: error.message })
        return
      })
     
        
      } catch (error) {
      console.error(error.message);
    }
  };

  componentDidMount() {
    this.getForecast(this.apiKey, this.props.city);
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
export default Forecast