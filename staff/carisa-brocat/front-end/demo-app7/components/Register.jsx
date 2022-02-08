const { useState, useEffect } = React

function Register({ onRegistered, onLoginClick }) {
    const [feedback, setFeedback] = useState(null)

    const submit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const city = event.target.city.value
        const country = event.target.country.value
        const password = event.target.password.value

        try {
            registerUser(name, username, city, country, password, error => {
                if (error) {
                    setFeedback(error.message)
                    return
                }
                onRegistered()
            })
        }
        catch (error) {
            setFeedback(error.message)
        }

    }

    const goToLogin = event => {
        event.preventDefault()

        onLoginClick()
    }

    logger.debug('Register -> render')

    return <div>
        <form onSubmit={submit}>
            <input type="text" name="name" placeholder="name" required />
            <input type="text" name="username" placeholder="username" required />
            <input type="text" name="city" placeholder="city" required />
            <input type="text" name="country" placeholder="country" required />
            <input type="password" name="password" placeholder="password" required />
            <button>Register</button>

            {feedback ? <p>{feedback}</p> : null}
        </form>

        <a href="" onClick={goToLogin}>Login</a>
    </div>
}


