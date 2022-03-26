const { useState, useEffect} = React

function Nav(props){

    console.log(props.username)

    return props.loged === false? 
    <nav className="nav">
        <h2 className="logo selectable" onClick={props.handleBack}>cars<span className="logo-detail">&</span>us</h2>
        <span className="selectable nav-profile-item" onClick={props.onClickLogin} >Please, log in</span>
    </nav> :
    <nav className="nav">
        <h2 className="logo">cars<span className="logo-detail">&</span>us</h2>
        <span className="selectable nav-profile-item" onClick={props.goHome} >{props.username}</span>
        <span className="selectable nav-profile-item" onClick={props.showCart} >🛒 Cart</span>
        <span className="selectable nav-profile-item" onClick={props.goFavorites} >⭐ Favorites</span>
        <span className="selectable nav-profile-item" onClick={props.onLogOut}>❌ Log out</span>
    </nav>


}
