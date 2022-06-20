import './PostComments.css'
import { addCommentToPost } from '../logic'
import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

export default ({ postId, comments, handleCloseModal, handleNewComments }) => {

    const handleAddComment = event => {
        event.preventDefault()


        const { target: { text: { value: text } } } = event

        try {
            addCommentToPost(sessionStorage.token, postId, text)
                .then(() => {
                    handleCloseModal()

                    handleNewComments()
                })
                .catch(error => {
                    if (error instanceof NotFoundError && error.message.includes('user') && error.message.includes('not found'))
                        delete sessionStorage.token

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

    return <div className='postComments'>
        <div>
            {
                comments.length ?
                    <ul> {comments.map(comment => <li key={comment.id}>
                        <h3>{comment.userNickname}</h3>
                        <p>{comment.date}</p>
                        <p>{comment.text}</p>
                    </li>)}
                    </ul> :
                    <p>Sorry, there are no comments to show</p>
            }
        </div>
        <form onSubmit={handleAddComment}>
            <textarea className="postComments__text"name="text" placeholder="Add a new comment" required></textarea>
            <button>Add Comment</button>
        </form>
    </div>
}