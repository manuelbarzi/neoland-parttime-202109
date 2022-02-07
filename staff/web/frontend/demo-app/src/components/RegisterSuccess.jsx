import { Component } from 'react'


class RegisterSuccess extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
        <h2>User successfully register</h2>


        <button onClick={event =>{
            event.preventDefault()
            this.props.onRegisteredClick()
            }}>Login</button>
    </div>
    } 
}


export default RegisterSuccess