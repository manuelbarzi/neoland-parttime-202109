import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { retrieveList, deleteList} from "../logic"
import UpdateList from "./UpdateList"
import List from "./List"
import Context from './Context'



export default function () {
    const { setFeedback } = useContext(Context)
    const [list, setList] = useState()
    const [controls, setControls] = useState(true)

    const navigate = useNavigate()

    const params = useParams()
    const { listId } = params

    useEffect(() => {
        refreshList()
    }, [listId])

    const refreshList = () => {
        try {
            retrieveList(sessionStorage.token, listId)
                .then(list =>  setList(list) )
                .catch((error) => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })

        }
    }
    const handleEdit =()=>{
        setControls(false)
    }

    const handleGoBack = ()=>{
        navigate(`/`)
    }

    const handleDeleteList =(listId)=>{

        try {
            deleteList(sessionStorage.token, listId)
                .then(() => {
                    navigate(`/`)
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    return <>
    <button onClick={handleGoBack}>x</button>
    {controls?
        <>
        {list && <List list={list} />}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleDeleteList(list.id)}>Delete</button>
        </>:
        <UpdateList refresh={refreshList} list={list}/>}
       
    </>

}