import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { retrieveRestaurant, updateRestaurant } from "../logic"
import Context from './Context'



export default function () {
    const { setFeedback } = useContext(Context)
    const [restaurant, setRestaurant] = useState()

    const navigate = useNavigate()

    const params = useParams()
    const { listId } = params

    useEffect(() => {
        restaurantDetail()
    }, [listId])

    const restaurantDetail = () => {
        try {
            retrieveRestaurant(sessionStorage.token)
                .then(restaurant => setRestaurant(restaurant))
                .catch((error) => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })

        }
    }
    const handleUpdateRestaurant = (event) => {
        event.preventDefault()

        const { target: { username: { value: username }, email: { value: email } } } = event
        try {
            updateRestaurant(sessionStorage.token, username, email)
                .then(() => navigate(`/`))
                .catch((error) => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })

        }
    }

     const handleGoBack = () => {
        navigate(`/`)
    }

    // const handleDeleteRestaurant = () => {

    //     try {
    //         deleteRestaurant(sessionStorage.token)
    //             .then(() => {
    //                 delete sessionStorage.token
    //                 navigate('/')
    //             })
    //             .catch(error => setFeedback({ level: 'info', message: error.message }))

    //     } catch (error) {
    //         setFeedback({ level: 'info', message: error.message })
    //     }
    // }

    return <div>
        {restaurant && <>
        <button onClick={handleGoBack}>x</button>
        <form onSubmit={handleUpdateRestaurant}>
            <h4>Username</h4>
            <input type="text" name="username" defaultValue={restaurant.username} ></input>
            <h4>Email</h4>
            <input type="email" name="email" defaultValue={restaurant.email} ></input>
            <button onClick='submit'>Save</button>
        </form>

        {/* <button onClick={handleDeleteRestaurant}>Delete</button> */}
        </>}
    </div>

}