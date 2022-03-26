var apiKey = 'D9GQMSPXZ48742LH6XJ362P5B';

class Forecast extends React.Component{
    constructor(){
        super()

        this.state = {
            values: null
        }
    }

    componentDidMount(){
        try {
            retrieveForecast(apiKey,'Burgos', (error, values)=>{
                if(error) return alert(error.message) 

                this.setState({values})
              
            })
            
        } catch (error) {
            alert(error.message)
        }
    }
     
    render(){

        if( this.state.values){
            return <ul className="list">
                {this.state.values.map(value => {
                return <li key={value.datetimeStr}>
                    <p>Current temperature <span>{value.temp}</span></p>
                    <p>Max <span>{value.maxt}</span></p>
                    <p>Min <span>{value.mint}</span></p>

                </li>
                    }
                )
            }   
            </ul>
            
            
        }
        else return null
        

        
    }
}