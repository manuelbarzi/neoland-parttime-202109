
import './Create.css'
import './x.css'
import { createItem, retrieveAllergens, retrieveCategories, retrieveIngredients } from "../logic"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import Context from './Context'


export default () => {

    const { setFeedback } = useContext(Context)
    const [controls, setControls] = useState(true)
    const [categories, setCategories] = useState()
    const [imageB64, setImageB64] = useState()

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
    const { listId, sectionId } = params


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
                .catch(error => setFeedback({ level: 'info', message: error.message }))
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
        const price = parseFloat(priceString)
        setItemPrice(price)

    }

    const handleOnChangeImage = (image) => {

        setItemImage(image)

    }



    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name }} } = event

        const itemIdCategories = []
        itemCategories.map(item => itemIdCategories.push(item.id))

        const itemIdIngredients = []
        itemIngredients.map(item => itemIdIngredients.push(item.id))

        const itemIdAllergens = []
        itemAllergens.map(item => itemIdAllergens.push(item.id))



        try {
            createItem(sessionStorage.token, listId, sectionId, name, itemIdCategories, itemIdIngredients, itemIdAllergens, itemPrice, imageB64)
                .then(() => {
                    navigate(`/list/${listId}/section/${sectionId}/section`)
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))

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

    const handleUploadB64 = event => {

        const file = event.target.files[0]

        const fileReader = new FileReader

        fileReader.readAsDataURL(file)

        fileReader.onload = event => {
            setImageB64(event.target.result)
        }
    }





    return <div className='CreateItem__contenedor'>
        <div className='CreateItem'>
            {allergens && categories && ingredients ? <>
                {controls ? <>
                    <h1 className='Create__title Create__titleMargin '>Create Item</h1>
                    <button className='x' onClick={handleGoBack}>x</button>
                    <form onSubmit={handleSave}>
                        <input className='Create__input' type="text" name="name" placeholder='Name' onChange={(event) => { handleOnChangeName(event.target.value) }} defaultValue={itemName} ></input>
                        <input className='Create__input Create__subtitle-margin' type="number" name="price" placeholder='Price' onChange={(event) => { handleOnChangePrice(event.target.value) }} defaultValue={itemPrice} ></input>
                        <h3 className='Create__subtitle Create__subtitle-margin' >Image</h3>
                        <input type="file" name="image" onChange={handleUploadB64} />
                        {imageB64 && <img src={imageB64} />}
                        
                        <h3 className='Create__subtitle Create__subtitle-margin' >Categories</h3>
                        {categories && categories.map(category => <><input type="checkbox" name="categories" defaultValue={category.id} onChange={() => handleOnChangeCategory(category)} defaultChecked={itemCategories.some(_category => _category.name === category.name)} />{category.name}</>)}

                        <h3 className='Create__subtitle Create__subtitle-margin' >Allergens</h3>
                        {allergens && allergens.map(allergen => <><input type="checkbox" name="allergens" defaultValue={allergen.id} onChange={() => handleOnChangeAllergen(allergen)} defaultChecked={itemAllergens.some(_allergen => _allergen.name === allergen.name)} />{allergen.name}</>)}

                        <h3 className='Create__subtitle Create__subtitle-margin' >Ingredients</h3>

                        <ul>{itemIngredients.map(ingredient =>
                            <li>{ingredient.name}</li>)}
                        </ul>
                        <div className='Create__buttons'>
                            <button className='Create__subButton CreateItem__submit-margin' onClick={handleControl}>Edit ingredients</button>
                            
                            <button className='CreateItem__submit' type="submit">Save</button>
                        </div>
                        
                    </form>

                </> : <>
                    <button className='x' onClick={handleControl}>x</button>
                    <div className='Create_ingredientsContenedor'>
                        <h3 className='Create__subtitle'>Ingredients</h3>

                        <input className='Create__input' type="text" name="query" onChange={(event) => { queryIngredients(event.target.value) }}></input>
                        {ingredientsFiltered ? <ul className='Create__ingredientsList'>{ingredientsFiltered.map(ingredientFiltered =>
                            <li><><input type="checkbox" name="ingredients" defaultValue={ingredientFiltered.id} onChange={() => handleOnChangeIngredient(ingredientFiltered)} defaultChecked={itemIngredients.some(_ingredient => _ingredient.name === ingredientFiltered.name)} />{ingredientFiltered.name}</></li>)}
                        </ul>

                            : <></>}
                        <button className='CreateItem__submit CreateItem__submit-margin' onClick={handleControl}>Done</button>
                    </div>
                </>}

            </> : <></>}
        </div>
    </div>


}