import { useEffect } from "react"
import { retrieveItemsFromSection } from "../logic"
import { useState } from "react"
import { useContext } from 'react'
import Context from './Context'

export default function ({ section: { name, items } }) {

    const { setFeedback } = useContext(Context)
    const [itemsStorage, setItemsStorage] = useState([])
    const [itemIngredient, setItemIngredient] = useState()

    useEffect(() => {
        retrieveItems()
    }, [])


    const retrieveItems = () => {

        try {

            retrieveItemsFromSection(sessionStorage.token, items)
                .then(items => {
                    setItemsStorage(items)
                    const ingredientStorage = []
                    items.map(item =>
                        item.ingredients.map(ingredient =>
                            ingredientStorage.push(ingredient.name)
                            ))
                    setItemIngredient(ingredientStorage)
                }
                )
                .catch((error) =>setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
           setFeedback({ level: 'info', message: error.message })

        }
    }

    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

    return <div >
        <h2>{name}</h2>

        <ul>
            {itemsStorage ? itemsStorage.map(item =>
                <li>
                    <div >
                        <h3>{item.name}</h3>
                        <p>
                            {formatter.format(itemIngredient)}
                        </p>
                        <h4>Categories</h4>
                        <ul>
                            {item.categories.map(category =>
                                <li>{category.name}</li>
                            )}
                        </ul>
                        <h4>Allergens</h4>
                        <ul>
                            {item.allergens.map(allergen =>
                                <li>{allergen.name}</li>
                            )}
                        </ul>
                        <p>{item.price}</p>

                    </div>
                </li>
            ) : <p>no items</p>}
        </ul>

    </div>


}