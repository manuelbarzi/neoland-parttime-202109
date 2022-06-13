
import { useState } from "react"
import UpdateSection from "./UpdateSection"
//list: {id, name, description, sections},

export default ({list:{id,name, description, sections, price , image}, onSaved }) => {
const [section, setSection] =useState()
const [controls, setControls] =useState(true)


    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name }, description: { value: description }, image:{value: image}, price:{value: price} } } = event

        try {
            updateList(sessionStorage.token, name, description, image, price)
                .then(() => {
                    onSaved()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }

    }

    const handleControls =(sectionId) =>{
        setSection(sectionId)
        setControls(!controls)}


    return <div>{
        controls?
        <>
        <h1>New List</h1>
        <form onSubmit={handleSave}>
            <input type="text" name="name" defaultValue={name} ></input>
            <textarea name="description" defaultValue={description} ></textarea>
            <input type="text" name="image" defaultValue={image} ></input>
            <input type="number" name="price" defaultValue={price} ></input>
            <button type="submit">Save</button>
        </form>
        <ul>
            {sections.map(section=> 
                <li>{section.name}
                 <button onClick={handleControls(section.id)}>Edit</button> </li>
               )}
        </ul>
        </>:<UpdateSection section={section} listId={id}/>}

    </div>


}