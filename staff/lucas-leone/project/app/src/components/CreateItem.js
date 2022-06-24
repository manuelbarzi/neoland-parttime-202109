import { createItem, retrieveAllergens, retrieveCategories, retrieveIngredients} from "../logic"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import Context from './Context'


export default () => {

    const { setFeedback } = useContext(Context)
    const [controls, setControls] = useState(true)
    const [categories, setCategories] = useState()

    const [itemImage, setItemImage] = useState()
    const [itemName, setItemName] = useState()
    const [itemPrice, setItemPrice] = useState()
    const [itemCategories, setItemCategories] = useState([])
    const [itemAllergens, setItemAllergens] = useState([])
    const [itemIngredients, setItemIngredients] = useState([])

    const [ingredientsFiltered, setIngredientsFiltered] = useState()

    const [allergens, setAllergens] = useState()
    const [ingredients, setIngredients] = useState()

    const navigate = useNavigate()
    const params = useParams()
    const { listId, sectionId} = params


    useEffect(() => {
        allCategories()
        allIngredients()
        allAllergens()
    }, [])



    const allCategories = () => {
        try {
            retrieveCategories(sessionStorage.token)
                .then(setCategories)
                .catch((error) => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })

        }
    }

    const allIngredients = () => {
        try {
            retrieveIngredients(sessionStorage.token)
                .then(ingredients => setIngredients(ingredients))
                .catch((error) => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })

        }
    }

    const allAllergens = () => {
        try {
            retrieveAllergens(sessionStorage.token)
                .then(allergens => setAllergens(allergens))
                .catch(error=> setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const handleOnChangeCategory = (category) => {

        const categoryIndex = itemCategories.findIndex(_category => _category.name === category.name)

        if (categoryIndex < 0) {
            itemCategories.push(category)

        } else { itemCategories.splice(categoryIndex, 1) }

        setItemCategories(itemCategories)


    }

    const handleOnChangeAllergen = (allergen) => {

        const allergenIndex = itemAllergens.findIndex(_allergen => _allergen.name === allergen.name)

        if (allergenIndex < 0) {
            itemAllergens.push(allergen)

        } else {
            itemAllergens.splice(allergenIndex, 1)
        }

        setItemAllergens(itemAllergens)


    }

    const handleOnChangeIngredient = (ingredient) => {

        const ingredientIndex = itemIngredients.findIndex(_ingredient => _ingredient.name === ingredient.name)

        if (ingredientIndex < 0) {
            itemIngredients.push(ingredient)

        } else {
            itemIngredients.splice(ingredientIndex, 1)
        }

        setItemIngredients(itemIngredients)


    }

    const handleOnChangeName = (name) => {

        setItemName(name)

    }

    const handleOnChangePrice = (priceString) => {
        const price =parseFloat(priceString)
        setItemPrice(price)

    }

    const handleOnChangeImage = (image) => {

        setItemImage(image)

    }



    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name }, image: { value: image } } } = event

        const itemIdCategories = []
        itemCategories.map(item => itemIdCategories.push(item.id))

        const itemIdIngredients = []
        itemIngredients.map(item => itemIdIngredients.push(item.id))

        const itemIdAllergens = []
        itemAllergens.map(item => itemIdAllergens.push(item.id))

        

        try {
            createItem(sessionStorage.token, listId, sectionId, name, itemIdCategories, itemIdIngredients, itemIdAllergens,itemPrice, image)
                .then(() => {
                    navigate(`/list/${listId}/section/${sectionId}/section`)
                })
                .catch(error=> setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }

    }
    const queryIngredients = (query) => {
        const ingredientsFilter = ingredients.filter(ingredient => ingredient.name.includes(query))

        setIngredientsFiltered(ingredientsFilter)

    }

    const handleControl = () => {
        setControls(!controls)

    }
    const handleGoBack = () => {
        navigate(`/list/${listId}/section`)
    }





    return <div>
        {allergens && categories && ingredients ? <>
            {controls ? <>
                <button onClick={handleGoBack}>x</button>
                <h1>Create Item</h1>
                <form onSubmit={handleSave}>
                    <h3>Name</h3>
                    <input type="text" name="name" onChange={(event) => { handleOnChangeName(event.target.value) }} defaultValue={itemName} ></input>
                    <h3>Image</h3>
                    <input type="text" name="image" onChange={(event) => { handleOnChangeImage(event.target.value) }} defaultValue={itemImage} ></input>

                    <h3>price</h3>
                    <input type="number" name="price" onChange={(event) => { handleOnChangePrice(event.target.value) }} defaultValue={itemPrice} ></input>

                    <h3>Categories</h3>
                    {categories && categories.map(category => <><input type="checkbox" name="categories" defaultValue={category.id} onChange={() => handleOnChangeCategory(category)} defaultChecked={itemCategories.some(_category => _category.name === category.name)} />{category.name}</>)}

                    <h3>Allergens</h3>
                    {allergens && allergens.map(allergen => <><input type="checkbox" name="allergens" defaultValue={allergen.id} onChange={() => handleOnChangeAllergen(allergen)} defaultChecked={itemAllergens.some(_allergen => _allergen.name === allergen.name)} />{allergen.name}</>)}

                    <h3>Ingredients</h3>

                    <ul>{itemIngredients.map(ingredient =>
                        <li>{ingredient.name}</li>)}
                    </ul>

                    <button onClick={handleControl}>Edit ingredients</button>


                    <button type="submit">Save</button>
                </form>

            </> : <>
                <button onClick={handleControl}>x</button>

                <h3>Ingredients</h3>

                <input type="text" name="query" onChange={(event) => { queryIngredients(event.target.value) }}></input>
                {ingredientsFiltered ? <ul>{ingredientsFiltered.map(ingredientFiltered =>
                    <li><><input type="checkbox" name="ingredients" defaultValue={ingredientFiltered.id} onChange={() => handleOnChangeIngredient(ingredientFiltered)} defaultChecked={itemIngredients.some(_ingredient => _ingredient.name === ingredientFiltered.name)} />{ingredientFiltered.name}</></li>)}
                </ul>

                    : <></>}
                <button onClick={handleControl}>Done</button>
            </>}

        </> : <></>}
    </div>


}