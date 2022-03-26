var favs = [];
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

    componentDidUpdate(prevState){
        if (prevState.active !== this.state.active) {
            console.log('active state changed.')
          }
    }

    render(){
        if(this.state.vehicles) {
            if (this.state.vehicles.length)
                return <ul className="flex-list">
                    {this.state.vehicles.map(vehicle => 
                    <li className="flex-item" key={vehicle.id}>
                        
                        <img src={vehicle.thumbnail} onClick={() => this.props.onItemClick(vehicle.id)} />
                        <h2>{vehicle.name}</h2>
                        <span>{vehicle.price}$</span>
                        <button className="item-fav-btn" onClick={e =>{
                            e.preventDefault()

                            
                            console.log(this)
                            console.log(favs)

                            if(favs.includes(vehicle.id)){
                                e.target.innerText = "★"
                               
                                var deleteIndex = favs.indexOf(vehicle.id)
                                favs.splice(deleteIndex, 1)
                                toggleFavorite(sessionStorage.token, {favs}, (error,user) => console.log)
                            }else{
                                e.target.innerText === "☆"
                                favs.push(vehicle.id)
                                toggleFavorite(sessionStorage.token, {favs}, (error,user) => console.log)
                            }


                           /* e.target.innerText === "☆"? e.target.innerText = "★" : e.target.innerText = "☆"
                             function patch user with fav car */
                            favs.push(vehicle.id)
                            toggleFavorite(sessionStorage.token, {favs}, (error,user) => console.log)
                        }}>{favs.includes(vehicle.id)?  "★": "☆"}</button>

                    </li>)}
                </ul>
            else
                return <p>No results :(</p>
        } else
            return null
    }

}