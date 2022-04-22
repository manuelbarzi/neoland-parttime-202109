import './Landing.css'

export default function Landing() {
    return <div className="Landing">

        <h1 className="Landing__title">NOTAPP</h1>
        
        <span className="Landing__buttonContainer">
            <a className="Landing__button" href="/register">Register</a> 
            or 
            <a className="Landing__button" href="/login">Login</a>
        </span>
    </div>
}