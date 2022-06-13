import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { retrieveList } from "../logic"
import UpdateList from "./UpdateList"
import List from "./List"


export default function () {
    const [list, setList] = useState()
    const [controls, setControls] = useState(true)
    const params = useParams()
    const { listId } = params

    useEffect(() => {
        refreshList()
    }, [listId])

    const refreshList = () => {
        try {
            retrieveList(sessionStorage.token, listId)
                .then(list =>  setList(list) )
                .catch((error) => alert(error.message))

        } catch (error) {
            alert(error.message)

        }
    }
    const handleEdit =()=>{
        setControls(false)
    }

    return <>{controls?
        <>
        {list && <List list={list} />}
        <button onClick={handleEdit}>Edit</button>
        </>:
        <Updatelist list={list}/>}
       
    </>

}