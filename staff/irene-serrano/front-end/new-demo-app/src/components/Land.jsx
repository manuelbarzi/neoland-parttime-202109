
function Land ({onClickLogin, onClickRegister}){
    return(
        <div className="land-container panel">
           <div className="land-title">
               <h1 className="logo">cars<span className="logo-detail">&</span>us</h1>
               <p>All the Hot Wheels™ you can imagine </p>
           </div> 
           <div className="land-btn-container">
               <button className="btn-full" onClick={onClickRegister}>Register</button>
               <button className="btn-full" onClick={onClickLogin}>Login</button>
           </div> 

        </div>
    )
}

export default Land

