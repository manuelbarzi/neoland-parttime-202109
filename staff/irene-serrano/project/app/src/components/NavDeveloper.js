import { useNavigate } from "react-router-dom"
import './Nav.css'
export default function ({handleLogout}) {
    const navigate = useNavigate()
    return <nav className="Developer__nav">
        
        <a className="Developer__navButton" onClick={()=>navigate("/profile")}>Profile</a>
        <a className="Developer__navButton" onClick={()=>navigate("../")}>Home</a>
        <a className="Developer__navButton" href="/" onClick={handleLogout}>Logout</a>
    </nav>
}