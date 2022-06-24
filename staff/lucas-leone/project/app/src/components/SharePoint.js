import { useNavigate } from "react-router-dom"
import QRCode from "react-qr-code"
import { useEffect, useState, useContext } from "react"
import { retrieveRestaurant } from "../logic"
import SharePoint from "./SharePoint";
import Context from './Context'

export default function () {
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()
    const[menuLink, setMenuLink] = useState()
    const [restaurant, setRestaurant] = useState()

    useEffect(()=>{
        retrieveUserId()
    },[])

    const retrieveUserId =()=>{
    try {
        retrieveRestaurant(sessionStorage.token)
            .then(restaurant =>{  
                setRestaurant(restaurant)
                setMenuLink(`http://localhost:3000/menu/${restaurant.username}`)}
             )
            .catch((error) => setFeedback({ level: 'info', message: error.message }))

    } catch (error) {
        setFeedback({ level: 'info', message: error.message })
    }}

    const goToMenu = () => { navigate(`menu/${restaurant.username}`) }
    const handleGoBack = ()=>{
        navigate(`/`)}

    return <div >
        {restaurant?<>
        <button onClick={handleGoBack}>x</button>
        <h1>Compartir</h1>
        <p>copia el sgiguiente link</p>
        <input type="text" name="link" defaultValue={menuLink} ></input>
        <QRCode value={menuLink} size={150} bgColor="#282c34" fgColor="#fff" level="H" />
        <button onClick={goToMenu}>Go</button></>:<></>}

    </div>


}