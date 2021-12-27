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
                    <p>{vehicle.name}</p>
                    <p>{vehicle.price}</p>
                </li>
            })}
        </ul>
    }

    
}