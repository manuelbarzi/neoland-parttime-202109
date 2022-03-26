
class Colors extends React.Component{
    constructor(){
        super()
        this.state = {
            color: 'white'
        }
        
    }

    
render(){
    return <div className="color-container">
        <div className="color-btn-container">
            <button onClick={(e)=> {
                e.preventDefault()
                this.setState({color:'blue'})
                }}>blue</button>
            <button onClick={(e)=> {
                e.preventDefault()
                this.setState({color:'red'})
                }}>red</button>
            <button onClick={(e)=> {
                e.preventDefault()
                this.setState({color:'yellow'})
                }}>yellow</button>
        </div>
        

        <div className="color-show"style={{ background: this.state.color }}></div>
        
        

    </div>

    



}






}