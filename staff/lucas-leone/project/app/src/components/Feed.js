import { useEffect, useContext } from "react";
import { retrieveLists } from "../logic";
import { useState } from "react";
import List from "./List";
import { useNavigate } from 'react-router-dom'
import Context from './Context'


export default function ({ refresh }) {
    const { setFeedback } = useContext(Context)
    const [lists, setLists] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        refreshList()
    }, [refresh])

    const refreshList = () => {
        try {
            retrieveLists(sessionStorage.token)
                .then((lists) => setLists(lists))
                .catch((error) =>setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
           setFeedback({ level: 'info', message: error.message })

        }
    }
    const handleGoToList = listId => {
        navigate(`/list/${listId}`)
    }
    return <div>

        <ul>
            {lists ? lists.map(list =>
                <li onClick={() => handleGoToList(list.id)}>
                    <List list={list}  />
                </li>) : <p>no list</p>}

        </ul>


   
          
 


    </div>



}