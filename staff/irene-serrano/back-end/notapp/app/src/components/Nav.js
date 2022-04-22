import './Nav.css'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'

export default ({ onLogout }) =>{
    const [user, setUser] = useState()
    const [feedback, setFeedback] = useState()  

      const getUser = () =>{
          try {
            retrieveUser(sessionStorage.token)
            .then(user => {
                setUser(user)}
                )
            .catch(error=> setFeedback(error.message))
          } catch (error) {
            setFeedback(error.message)
          }
        }


useEffect (()=> {
    getUser()
}, [])
 
 
    return <nav className="Nav">
        <span className="Nav__logo" >NOTAPP</span>
        <div className="Nav__linksContainer">
          { user? <a className="Nav__link Nav__link-strong" >{user.name}</a> : <a className="Nav__link">"Please, sign in"</a>}
            {/* <a className="Nav__link">🔎</a>
            <a className="Nav__link">👤</a> */}
            <a onClick={onLogout} className="Nav__link Nav__link-light">Logout</a>
        </div>
    </nav>
}