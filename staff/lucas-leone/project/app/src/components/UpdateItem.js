
import { useState } from "react"
//list: {id, name, description, sections},

export default ({ itemId, onSaved }) => {
//export default ({ item: { name, categories, ingredients, allergens, image, price }, onSaved }) => {
    const [ìtem, setItem] = useState()
    const [categories, setCategories] = useState()
    const [allergens, setAllergens] = useState()
    const [ingredients, setIngredients] = useState()


    useEffect(() => {
        retrieveItem()
        retrieveCategories()
        retrieveIngredients()
        retrieveAllergens()
    }, [])

    const retrieveItem = () => {
        try {
            retrieveItem(sessionStorage.token, itemId)
                .then(setItem)
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)

        }
    }

    const retrieveCategories = () => {
        try {
            retrieveCategories(sessionStorage.token)
                .then(setCategories)
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)

        }
    }

    const retrieveIngredients = () => {
        try {
            retrieveIngredients(sessionStorage.token, ingredients)
                .then(ingredients => setIngredients(ingredients))
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)

        }
    }

    const retrieveAllergens = () => {
        try {
            retrieveAllergens(sessionStorage.token, allergens)
                .then(allergens => setAllergens(allergens))
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const categoriesCapture = (vegetarian, vegan, bio) => {
        if (vegetarian) { categories.push('Vegetarian') }
        if (vegan) { categories.push('Vegan') }
        if (bio) { categories.push('Vegan') }
    }

    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name }, categories: { value: categories } } } = event

        categoriesCapture(vegetarian, veggie, bio)
        allergensCapture(gluten)

        try {
            updateItem(sessionStorage.token, name, categories, ingredients, allergens, price, image)
                .then(() => {
                    onSaved()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }

    }




    return <div>
        <h1>Update Section</h1>
        <form onSubmit={handleSave}>
            <input type="text" name="name" defaultValue={name} ></input>
            <input type="text" name="image" defaultValue={image} ></input>
            <input type="number" name="price" defaultValue={price} ></input>
            {categories && categories.map(category => <><input type="checkbox" name="categories" defaultValue={category.id} defaultChecked={item.categories.some(_category => _category.id === category.id)} />{category.name}</>)}
            

            <ul>{ingredients.map(ingredient =>
                <li>{ingredient.name}</li>)}
            </ul>
            <button type="submit">Save</button>
        </form>

    </div>


}