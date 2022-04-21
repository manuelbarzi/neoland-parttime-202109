import './Landing.css'

export default function Landing() {
    return <div className='body'>
        
        <div className="Landing">
            <a className='landing-credentials' href="/register">Register</a>  or  <a className='landing-credentials' href="/login">Login</a>
        </div>
        <h1 className= 'title'>Notapp</h1>
    </div>
}