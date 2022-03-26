class Land extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="land-container panel">
               <div className="land-title">
                   <h1 className="logo">cars<span className="logo-detail">&</span>us</h1>
                   <p>All the Hot Wheels™ you can imagine </p>
               </div> 
               <div className="land-btn-container">
                   <button className="btn-full" onClick={this.props.onClickRegister}>Register</button>
                   <button className="btn-full" onClick={this.props.onClickLogin}>Login</button>
               </div> 

            </div>
        )
    }
}