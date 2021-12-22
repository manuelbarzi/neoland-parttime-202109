class Favorites extends React.Component {

    constructor(){

        super()

        this.state = {favs :[]}
    }
    componentDidMount(){
        logger.debug (' Favorites -> did mount')
        
        try{
            retrieveFavsVehicles(sessionStorage.token, (error, favs)=> {
                if(error){
                    return alert('error en retrieveFavsVehicles')
                }
                this.setState({favs})
            })
        }catch(error){
            return alert('error en retrieveFavsVehicles')
        }

    }

    render(){
        return <ul>
           { this.state.favs.map(vehicle =>{
                <li>
                    <p>{this.state.favs.vehicle.name}</p>
                    <p>{this.state.favs.vehicle.price}</p>
                </li>
            })}
        </ul>
    }

    
}