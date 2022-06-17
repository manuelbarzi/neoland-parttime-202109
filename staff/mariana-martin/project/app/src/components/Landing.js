import './styles/Landing.css'

function Landing(){
    return <div className="container">
        <div className='container container-login__section'>
        <h1>My meals</h1>
        <p>Achieve your goals easily!</p>
        <a className="login-button-landing" href="/login" > LOGIN </a>
        </div>
        <p><strong>Are you a Nutritionist?</strong></p>
        <p> Create an account <a href="/register-nutritionist">sign up</a></p>
       

    </div>
}

export default Landing