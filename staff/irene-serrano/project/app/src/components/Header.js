import logo from '../tindev-logo.png' 
import './Header.css'
export default function () {
  
    return <header className="Header">
            <span className="Header__logo">
                <img className="Header__logoImg" src={logo} alt="logo"></img>
            </span>
        
    </header>
}