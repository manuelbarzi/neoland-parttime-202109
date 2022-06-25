import './NewPost.css'
import { createPost } from '../logic'
import { useState } from 'react'
import { useContext } from 'react'
import Context from './Context'
import uploadImage from './helps/uploadImage'
import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

export default ({ handleCloseModal, handlePostCreated }) => {
    const { setFeedback } = useContext(Context)

    const [category, setCategory] = useState('product')
    const [imageB64, setImageB64] = useState()

    const handleUploadImage = (event) => {
        uploadImage(event, setImageB64)
    }

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
            } } = event

        let address = ''
        if (category === 'space') {
            address = event.target.address.value
        }

        try {
            createPost(sessionStorage.token, title, description, category, subject, imageB64, address)
                .then(() => {
                    handleCloseModal()

                    setFeedback({ level: 'info', message: 'Post created successfully' })

                    handlePostCreated()
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
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
                <img src={imageB64} />
                <input type="file" name="image" onChange={handleUploadImage} />
            </div>
            <button>Create New Post</button>
        </div>
    </form>
}