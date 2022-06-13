
import { useState } from "react"
import UpdateItem from "./UpdateItem"
//list: {id, name, description, sections},

export default ({ section: { name, items }, onSaved }) => {
    const [item, setItem] = useState()
    const [controls, setControls] = useState(true)
    const [itemsStorage, setItemsStorage] = useState([])

    useEffect(() => {
        retrieveItems()
    }, [])


    const retrieveItems = () => {

        try {

            retrieveItemsFromSection(sessionStorage.token, items)
                .then(items => setItemsStorage(items))
                .catch((error) => alert(error.message))

        } catch (error) {
            alert(error.message)

        }
    }

    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name } } } = event

        try {
            updateSection(sessionStorage.token, listId, name)
                .then(() => {
                    onSaved()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }

    }

    const handleControls = (itemId) => {
        setItem(itemId)
        setControls(!controls)
    }


    return <div>{
        controls ?
            <>
                <h1>Update Section</h1>
                <form onSubmit={handleSave}>
                    <input type="text" name="name" defaultValue={name} ></input>
                    <button type="submit">Save</button>
                </form>
                <ul>
                    {itemsStorage.map(item =>
                        <li>{item.name}
                            <button onClick={handleControls(item.id)}>Edit</button> </li>
                    )}
                </ul>
            </> : <UpdateItem itemId={item.id} />}

    </div>


}