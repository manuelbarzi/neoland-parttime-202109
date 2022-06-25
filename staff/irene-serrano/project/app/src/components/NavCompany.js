import { useNavigate } from "react-router-dom"
import './Nav.css'

export default function ({handleLogout}) {
    
    const navigate = useNavigate()
    return <nav className="Company__nav">
        <a className="Company__navButton" onClick={()=>navigate("/candidates")}>Candidates</a>
        <a className="Company__navButton" onClick={()=>navigate("../")}>Home</a>
        <a className="Company__navButton-bubble" onClick={()=>navigate("/new-offer")}>✚</a>
        <a className="Company__navButton" onClick={()=>navigate("/profile")}>Profile</a>
        <a className="Company__navButton" href="/" onClick={handleLogout}>Logout</a>
    </nav>
}