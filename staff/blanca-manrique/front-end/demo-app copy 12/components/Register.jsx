const { useState } = React

function Register({ onRegisterIn, onLoginClick }) {
    const [feedback, setFeedback] = useState(null)

    const submit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value
        const city = event.target.city.value
        const country = event.target.country.value

        try {
            registerUser(name, username, password, city, country, (error) => {
                if (error) {
                    setFeedback(error.message)

                    return
                }
                onRegisterIn()
            })

        } catch (error) {
            setFeedback(error.message)
        }
    }

    const goToLogin = event => {
        event.preventDefault()
        onLoginClick()
    }

    logger.debug('Register -> render')

    return <div className='register'>
        <h1 className='register__title'>My App</h1>
        <form className='register__form form' onSubmit={submit}>
            <input className='form__name input' type="text" name="name" placeholder="name" />
            <input className='form__username input' type="text" name="username" placeholder="username" />
            <input className='form__password input' type="password" name="password" placeholder="password" />
            <input className='form__city input' type="city" name="city" placeholder="city" />
            <input className='form__country input' type="country" name="country" placeholder="country" />
            <button className='form__btn input'>Register</button>

            {feedback ? <p className='form__feedback'>{feedback}</p> : null}
        </form>

        <a className='register__btn' href="" onClick={goToLogin}>Login</a>
    </div>
}

