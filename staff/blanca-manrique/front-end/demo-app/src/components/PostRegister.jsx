import logger from '../logger'

function PostRegister({onLoginClick}) {
    logger.debug('PostRegister -> render')

    const clickLogin= event => {
        event.preventDefault()
        onLoginClick()
    }
    
    return <div>
        <h2>User successfully register</h2>
        <button onClick={clickLogin}>Login</button>
    </div>
} 

export default PostRegister