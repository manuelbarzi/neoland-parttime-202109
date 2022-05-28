import {Link} from 'react-router-dom'

function Landing() {

    return <div>
        <h1>Landing</h1>
        <button><Link to='/register'>Register</Link></button>
        <button><Link to='/login'>LogIn</Link></button>
    </div>
}

export default Landing