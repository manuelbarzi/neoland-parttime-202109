class Detail extends React.Component {
    constructor (){
        super()
        this.state = { vehicle: null}
    }

    componentDidMount(){
        try{
            retrieveVehicle(this.props.itemId, (error,vehicle) => {
                if(error) return alert(error. message)
                this.setState({vehicle})
            })
        }catch (error){
            alert(error.message)
        }
    }

    render(){
        if(this.state.vehicle)
            return <div>
                <h2>{this.state.vehicle.name}</h2>
                <img src={this.state.vehicle.image} />
                <p>{this.state.vehicle.description}</p>
                <p>{this.state.vehicle.price} $</p>
                <p>{this.state.vehicle.color}</p>
                <p>{this.state.vehicle.style}</p>
                <p>{this.state.vehicle.year}</p>
                <a href={this.state.vehicle.url}>Original item</a>
            </div>
        else
            return <h3>Ups! Something went wrong</h3>
    }
}