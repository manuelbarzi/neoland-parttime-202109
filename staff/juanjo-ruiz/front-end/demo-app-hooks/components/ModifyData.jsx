const { useState } = React

function ModifyData({ onModifyed }) {
    const [feedback, setFeedback] = useState(null)


    const modifyDataUser = event => {
        event.preventDefault()

        const data = {}

        const name = event.target.name.value
        const username = event.target.username.value
        const city = event.target.city.value

        data.name = name
        data.username = username
        data.city = city


        try {
            modifyUser(token, data, (error) => {
                if (error) {
                    setFeedback(error.message)

                    return
                }
                onModifyed()
            })

        } catch (error) {
            setFeedback(error.message)
        }
    }

    const goToHome = event => {
        event.preventDefault()

        onModifyed()
    }

    return <div className="container">
        <form className="form form-container" onSubmit={modifyDataUser}>
            <h2 className="title-form">Cambia tus datos</h2>

            <input className="input input-form" type="text" name="name" placeholder="Nuevo nombre" />
            <input className="input input-form" type="text" name="username" placeholder="Nuevo usuario" />
            <input className="input input-form" type="text" name="city" placeholder="Nueva ciudad" />

            <button className="button button-form">Enviar</button>
        </form>

        <p>Vuelve a la <a href="" onClick={goToHome}>página principal</a></p>

        {state.feedback ? <p>{feedback}</p> : null}

    </div>
}
