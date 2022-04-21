import './Landing.css'

export default function Landing() {
    return <div className="container">
        <div className="Landing">
          <h1>NotApp</h1>
          
          <p>Do You Already Have An Account?</p>
          <a href="login">Login</a>
          <p>Don't have an account?</p>
        <a href="/register">Register</a> 
    </div>
    </div> 
}

