class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'pepinillo',
            vehicles: []
        }
    }
    componentDidMount(){
        try {
            retrieveUser(this.props.token, (error, user)=>{
                if(error){
                    alert(error.message)
                }
                this.setState({name:user.name})
            })
        
        } catch (error) {
            alert(error.message)
        }
    }

    render(){
        if(this.state.name) return <div>
            <h1>Hello, {this.state.name? this.state.name : 'World!'}</h1>
            
            <form onSubmit={e => {
                e.preventDefault()

                var query = e.target.query.value

                try {
                    searchVehicles(query, (error, vehicles)=>{
                        if(error) return alert(error.message)
                        this.setState({vehicles})
                    })
                } catch (error) {
                    alert(error.message)               
                }
            }}>

                <input type="text" name="query" placeholder="Buscar..."></input>
                <button>Search</button>
            </form>

            {!!this.state.vehicles.length && <ul>
                {this.state.vehicles.map((vehicle) => {
                    <li>
                        <h2>{vehicle.name}</h2>
                        <img src={vehicle.thumbnail}  />
                        <span>{vehicle.price} €</span>
                    </li>
                } )}
                </ul>}

        </div>
        else return null
    } 
   


}