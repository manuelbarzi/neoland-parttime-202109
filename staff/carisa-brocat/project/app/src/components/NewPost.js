import './NewPost.css'
import { createPost } from '../logic'
import { useState } from 'react'
import { errors } from 'commons'
const { AuthError } = errors

export default ({ handleCloseModal, handlePostCreated }) => {
    const [category, setCategory] = useState('product')

    const handleCategorySelected = event => {
        setCategory(event.target.value)
    }

    const handleCreatePost = event => {
        event.preventDefault()

        const { target:
            { category: { value: category },
                subject: { value: subject },
                title: { value: title },
                description: { value: description },
                image: { value: image },
            } } = event

        let address = ''
        if (category === 'space') {
            address = event.target.address.value
        }

        try {
            createPost(sessionStorage.token, title, description, category, subject, image, address)
                .then(() => {
                    handleCloseModal()
                     handlePostCreated()
                })
                .catch(error => {
                    if (error instanceof AuthError)
                        delete sessionStorage.token

                    alert(error.message)
                })
        } catch (error) {
            if (error instanceof AuthError)
                delete sessionStorage.token

            alert(error.message)
        }
    }

    return <form className="newPost" onSubmit={handleCreatePost}>
        <div className="createPost__header">
            <div>
                <label >Category</label>
                <select id='category' name='category' defaultValue='product' onChange={handleCategorySelected}>
                    <option value='product'>Product</option>
                    <option value='question'>Question</option>
                    <option value='space'>Space</option>
                    <option value='other'>Others</option>
                </select>
            </div>
            <div>
                <label >Subject</label>
                <select id='subject' name='subject' defaultValue='moisture'>
                    <option value='moisture'>Moisture</option>
                    <option value='definition'>Definition</option>
                    <option value='restore'>Restore</option>
                    <option value='definition'>Definition</option>
                    <option value='strength'>Strength</option>
                </select>
            </div>
            <div className="newPost__body">
                <label >Title / SpaceName</label>
                <input type="text" name="title" required placeholder="Give a title to your post" />

                <label >Description</label>
                <textarea name="description" placeholder="Say more" required></textarea>

                {category === 'space' && <><label >Adress</label>
                    <input type="text" name="address" placeholder="Indicate the Adress" required /></>}

                <label >Image</label>
                <input type="text" name="image" placeholder="Upload a image" />
            </div>
            <button>Create New Post</button>
        </div>
    </form>
}