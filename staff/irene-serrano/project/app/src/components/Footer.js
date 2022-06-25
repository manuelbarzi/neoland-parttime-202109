import logo from '../tindev-logo.png' 
import './Footer.css'
import { useNavigate } from "react-router-dom"


export default function () {
    const navigate = useNavigate()

    return <footer className="Footer">
          
          <span className="Footer__logo">
                <img className="Footer__logoImg" src={logo} alt="logo"></img>
            </span>
            <div className="Footer__linkContainer">
                <a onClick={() => navigate("/legal-advice")} className="Footer__link">Legal advice</a>
                <a onClick={() => navigate("/about")} className="Footer__link">About us</a>
                <a onClick={() => navigate("/contact")} className="Footer__link">Contact</a>
            </div>
            <p>TINDEV ©    ·    All rights reserved    ·    2022</p>    
        
    </footer>
}