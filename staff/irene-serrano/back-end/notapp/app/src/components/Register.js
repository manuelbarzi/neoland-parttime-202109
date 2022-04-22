import { registerUser } from '../logic'
import { authenticateUser } from '../logic'
import {useState} from 'react'

import './Register.css'

export default function ({onLoggedIn}){
    const [feedback, setFeedback] = useState()
    const register = event => {
        event.preventDefault()
        const { target: 
            { name: {value: name}, 
             email: {value: email}, 
             password: {value:password}
            }} = event

        try {
            registerUser( name, email, password)
                .then(()=>{
                    
                    
                    try {
                        authenticateUser(email, password)
                            .then(res=> {
                                const token = res.token
                                sessionStorage.token = token
                                onLoggedIn()
                            })
                            .catch(error=> {
                                delete sessionStorage.token
                                setFeedback(error.message)
                              //  console.error(error.message)
                            })
                    }catch (error){
                        delete sessionStorage.token
                        setFeedback(error.message)
                       // console.error(error.message)
                    }
                })
                .catch(error =>
                    setFeedback(error.message))
                
        }catch (error){
            setFeedback(error.message)
           // console.error(error.message)
        }
    }
    return <div className="register">
        <h3 className="register__title">Register</h3>

        <form onSubmit={register} className="register__form">
        <input className="form__input" type="text" name="name" placeholder="name"/>
        <input className="form__input" type="email" name="email" placeholder="email"/>
        <input className="form__input" type="password" name="password" placeholder="password"/>
    
        <button className="form__submit" type="submit">Register</button>
       
       {  feedback? <p className="form__feedback-error">{feedback}</p> : null}
        <p>Do you already have an account? Please, <a href="/login">sign in</a></p>
    
    </form>
    </div>
    
    
    
}
