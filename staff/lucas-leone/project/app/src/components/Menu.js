import { useEffect } from "react";
import { retrieveLists } from "../logic";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from './Context'
import Section from "./Section";

export default function ({ refresh, username }) {
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
            <h1>Welcome to</h1><h1> {username}</h1>
            {lists ? lists.map(list =>
                <li onClick={() => handleGoToList(list.id)}>
                    <div >
                        <h1>{list.name}</h1>
                        <p>{list.description}</p>
                        {list.sections ? list.sections.map(section => <div>
                            <Section section={section} />
                        </div>) : <p>no sections</p>}

                    </div>

                </li>) : <p>no list</p>}

        </ul>







    </div>



}