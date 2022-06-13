import './NewPost.css'
import { createPost } from '../logic'
import { errors } from 'commons'
const { AuthError } = errors

export default ({ closeaAndOpenModal }) => {

    const handleCreatePost = event => {
        event.preventDefault()

        const { target:
            { category: { value: category },
                subject: { value: subject },
                title: { value: title },
                description: { value: description },
              //  address: { value: address },
                image: { value: image },
            } } = event


        try {
            createPost(sessionStorage.token, title, description, category, subject, image, address)
                .then(() => closeaAndOpenModal())
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
                <label for="category">Category</label>
                <select id='category' name='category'>
                    <option value='product'>Product</option>
                    <option value='question'>Question</option>
                    <option value='space'>Space</option>
                    <option value='other'>Others</option>
                </select>
            </div>
            <div>
                <label for="subject">Subject</label>
                <select id='subject' name='subject'>
                    <option value='moisture'>Moisture</option>
                    <option value='definition'>Definition</option>
                    <option value='restore'>Restore</option>
                    <option value='definition'>Definition</option>
                    <option value='strength'>Strength</option>
                </select>
            </div>
            <div className="newPost__body">
                <label for="title">Title / SpaceName</label>
                <input type="text" id="title" name="title" required placeholder="Give a title to your post" />

                <label for="description">Description</label>
                <textarea id="description" name="description" placeholder="Say more" />

                <label for="adress">Adress</label>
                <input type="text" id="adress" name="adress" placeholder="Indicate the Adress" />

                <label for="image">Image</label>
                <input type="text" id="image" name="image" placeholder="Upload a image" />
            </div>
            <button>Create New Post</button>
        </div>
    </form>
}