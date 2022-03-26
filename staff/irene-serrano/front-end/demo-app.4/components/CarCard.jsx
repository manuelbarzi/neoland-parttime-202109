
//var car = {}
class CarCard extends React.Component {
    constructor(){
        super()
        this.state = {vehicle : null}
        
    }

    componentDidMount(){
       // console.log('component mounted')
        retrieveVehicle (this.props.vehicle.id, (error, vehicle) => {
            this.setState({vehicle: vehicle})
        })
        retrieveUser(sessionStorage.token, (error, user) => {
            favs = user.favs
        } )
      
        
    }

    componentDidUpdate(prevState){
        if(prevState.vehicle !== this.state.vehicle)
     //   console.log('did update')
      
        
        this.render()
        
    }
    componentWillUnmount(){
        toggleFavorite(sessionStorage.token, {favs}, (error,user) => console.log)
    }

    render(){
        return <li className="flex-item card" >
                        
        <img src={this.props.vehicle.thumbnail} />
        <h2>{this.props.vehicle.name}</h2>
        <span>{this.props.vehicle.price}$</span>

       { this.state.vehicle === null || this.state.vehicle === undefined?
            null
            : (<div className="card-details">
            <p className="card-description">{this.state.vehicle.description}</p>
            <p className="card-year">{this.state.vehicle.year}</p>
            <a href={this.state.vehicle.url} target="_blank">Go to original website</a>
           </div>)}
        
       
        <button className="item-fav-btn" onClick={e =>{
            e.preventDefault()

           
    }}>{this.state.vehicle === null ?  "★": "☆"}</button>

    </li>
    }
        
    
}