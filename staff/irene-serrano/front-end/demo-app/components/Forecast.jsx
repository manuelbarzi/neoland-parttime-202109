var apiKey = 'D9GQMSPXZ48742LH6XJ362P5B';
var city = 'Burgos'

class Forecast extends React.Component{
    constructor(){
        super()

        this.state = {
            values: null,
           
        }
    }

    componentDidMount(){
     
        try {
            retrieveForecast(apiKey, city, (error, values)=>{
                if(error) return alert(error.message) 

                this.setState({values})              
            })
            
        } catch (error) {
            alert(error.message)
        }
    }
     
    render(){

        if( this.state.values){
            return <ul className="forecast-list">
                <h3>El Tiempo en {city}</h3>

                {this.state.values.map(value => {
                return <li key={value.datetimeStr}>
                    
                    <p >Max <span className="forecast-item-temperature max">{value.maxt}</span></p>
                    <p>Min <span className="forecast-item-temperature min">{value.mint}</span></p>

                </li>
                    }
                )
            }   
            </ul>
            
            
        }
        else return null
        

        
    }
}