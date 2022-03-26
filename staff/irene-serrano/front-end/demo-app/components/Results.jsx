class Results extends React.Component{
    constructor(){
        super()
        this.state = {
            vehicles: null,
            active: false }
    }

    componentDidMount(){
        try{
            searchVehicles(this.props.query, (error, vehicles) =>{
                if(error) return alert (error.message)
                this.setState({vehicles})
            })
        } catch (error){
            alert(error.message)
        }
    }

    componentWillReceiveProps(props){
        try{
            searchVehicles(props.query, (error,vehicles) => {
                if(error) return alert(error.message)
                this.setState({vehicles})
            })
        }catch (error){
            alert(error.message)
        }
    }


    render(){
        if(this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul className="flex-list">
                    {this.state.vehicles.map(vehicle => 
                    <CarCard vehicle={vehicle} key={vehicle.id} />
                    )}
                </ul>
            else
                return <p>No results :(</p>
        } else
            return null
    }

}