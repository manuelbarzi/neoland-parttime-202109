import { useEffect } from "react"
import { retrieveItemsFromSection } from "../logic"
import { useState } from "react"

export default function ({ section: { name, items } }) {

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

    return <div >
        <h3>{name}</h3>

        <ul>
            {itemsStorage ? itemsStorage.map(item =>
                <li>
                    <div >
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <time>{item.date.toDateString()}</time>
                    </div>
                </li>
            ) : <p>no items</p>}
        </ul>

    </div>


}