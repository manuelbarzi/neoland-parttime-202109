import { useEffect } from "react";
import { retrieveLists } from "../logic";
import { useState } from "react";
import List from "./List";
import { Routes, Route, useNavigate } from 'react-router-dom'

export default function ({ refresh }) {
    const [lists, setLists] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        refreshList()
    }, [refresh])

    const refreshList = () => {
        try {
            retrieveLists(sessionStorage.token)
                .then((lists) => setLists(lists))
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)

        }
    }
    const handleGoToList = listId => {
        navigate(`/l/${listId}`)
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