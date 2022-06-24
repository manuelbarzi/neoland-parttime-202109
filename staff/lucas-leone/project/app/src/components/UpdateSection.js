
import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { updateSection, retrieveItemsFromSection, retrieveSection, removeItem, retrieveItems, deleteItem } from "../logic"
import Context from './Context'

export default () => {
    const { setFeedback } = useContext(Context)
    const [items, setItems] = useState()
    const [allItems, setAllItems] = useState()
    const [itemsFiltered, setItemsFiltered] = useState()
    const [section, setSection] = useState()
    const [control, setControl] = useState(false)
    const params = useParams()
    const { listId, sectionId } = params
    const navigate = useNavigate()

    useEffect(() => {
        detailSection()
        retrieveAllItems()

    }, [control])
    const retrieveAllItems = () => {
        try {
            retrieveItems(sessionStorage.token)
                .then(items => {
                    setAllItems(items)
                })
                .catch((error) => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }


    const detailSection = () => {
        try {
            retrieveSection(sessionStorage.token, listId, sectionId)
                .then(section => {
                    setSection(section)
                    retrieveItemFromIds(section.items)
                })
                .catch((error) => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const retrieveItemFromIds = (itemsIds) => {
        try {
            retrieveItemsFromSection(sessionStorage.token, itemsIds)
                .then(items => setItems(items))
                .catch((error) => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const handleSave = event => {
        event.preventDefault()
        const { target: { name: { value: name } } } = event
        const { items } = section
        try {
            updateSection(sessionStorage.token, listId, sectionId, name, items)
                .then(() => {
                    navigate(`/`)
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const handleRemoveItem = (itemId) => {
        try {
            removeItem(sessionStorage.token, listId, sectionId, itemId)
                .then(() => {
                    detailSection()
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const handleUpdateItem = (itemId) => {
        navigate(`/list/${listId}/section/${sectionId}/item/${itemId}`)
    }

    const handleGoBack = () => {
        navigate(`/list/${listId}`)
    }

    const handleCreateItem = (event) => {
        navigate(`/list/${listId}/section/${sectionId}/item`)
    }
    const queryItems = (query) => {

        const itemsFilter = allItems.filter(item => item.name.toLowerCase().includes(query))
        setItemsFiltered(itemsFilter)

    }

    const handleOnChangeitem = (item) => {
        const itemIndex = section.items.findIndex(_item => _item === item.id)
        if (itemIndex < 0) {
            section.items.push(item.id)
        } else {
            section.items.splice(itemIndex, 1)
        }
        setSection(section)
        retrieveItemFromIds(section.items)
    }

    const handleDeleteItem = (itemId)=>{
        try {
            deleteItem(sessionStorage.token, itemId)
                .then(() => {
                    const itemIndex = itemsFiltered.findIndex(_item => _item.id === itemId)
                        itemsFiltered.splice(itemIndex, 1)
                    setItemsFiltered(itemsFiltered)
                    
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    

    return <div>
        {items ? <>
            <button onClick={handleGoBack}>x</button>
            <h1>Update Section</h1>
            <form onSubmit={handleSave}>
                <input type="text" name="name" defaultValue={section.name} ></input>
                <button type="submit">Save</button>
            </form>
            <h4>Items</h4>
            <ul>
                {items.map(item =>
                    <li>{item.name}
                        <button onClick={() => handleUpdateItem(item.id)}>Edit</button>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button></li>
                )}
            </ul>
            <input type="text" name="query" onChange={(event) => { queryItems(event.target.value) }}></input>
            {itemsFiltered ? <ul>{itemsFiltered.map(itemFiltered =>
                <li><><input type="checkbox" name="items" defaultValue={itemFiltered.id} onChange={() => handleOnChangeitem(itemFiltered)} defaultChecked={items.some(_item => _item.name === itemFiltered.name)} />{itemFiltered.name}
                <button onClick={()=>handleDeleteItem(itemFiltered.id)}>delete</button>
                </></li>)}
            </ul>

                : <></>}
            <button onClick={handleCreateItem}>+</button>
        </> :
            <></>}
    </div>


}