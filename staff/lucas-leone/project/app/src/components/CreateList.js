import { createList } from "../logic"

//list: {id, name, description, sections},

export default ({ onSaved }) => {




    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name }, description: { value: description } } } = event

        try {
            createList(sessionStorage.token, name, description)
                .then(() => {
                    onSaved()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }

    }


    return <div>
        <h1>New List</h1>
        <form onSubmit={handleSave}>
            <input type="text" name="name" ></input>
            <textarea name="description" ></textarea>
            <button type="submit">Save</button>
        </form>

    </div>


}