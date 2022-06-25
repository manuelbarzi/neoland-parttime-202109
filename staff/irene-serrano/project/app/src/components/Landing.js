import './Landing.css'
import { useNavigate }  from 'react-router-dom'
export default function() {
    const navigate = useNavigate()
    return <div className="Landing">
       
        <h1 className="Landing__title">TINDEV</h1>
        <p className="Landing__explain"> The easiest way to connect <strong>potential developers</strong> with <strong>committed companies</strong>
        </p>
        <div className="Landing__buttonContainer">
            <button className="Landing__button-primary" onClick={()=>navigate("/registerCompany")}>I'm looking for talent</button>
            <button className="Landing__button-primary" onClick={()=>navigate("/registerDeveloper")}>I'm a code beast 🦁</button>
        </div>

        <p>Already have an account? Please, <a onClick={()=>navigate("/login")}>log in</a></p>
    </div>
    
   
}