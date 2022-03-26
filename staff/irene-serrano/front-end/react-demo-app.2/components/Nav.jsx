class Nav extends React.Component {
    constructor(){
        super()
      
    }


    render(){
        return this.props.loged === false? 
        <nav className="nav">
            <h2 className="logo selectable" onClick={this.props.handleBack}>cars<span className="logo-detail">&</span>us</h2>
            <span className="selectable nav-profile-item" onClick={this.props.onClickLogin} >Please, log in</span>
        </nav> :
        <nav className="nav">
            <h2 className="logo">cars<span className="logo-detail">&</span>us</h2>
            <span className="selectable nav-profile-item" onClick={this.props.goHome} >{this.props.username}</span>
            <span className="selectable nav-profile-item" onClick={this.props.showCart} >🛒 Cart</span>
            <span className="selectable nav-profile-item" onClick={this.props.goFavorites} >⭐ Favorites</span>
            <span className="selectable nav-profile-item" onClick={this.props.onLogOut}>❌ Log out</span>
        </nav>
    }
}