import './PostComments.css'
import { addCommentToPost } from '../logic'
import { useContext } from 'react'
import Context from './Context'

import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

export default ({ postId, comments, handleCloseModal, handleNewComments }) => {
    const { setFeedback } = useContext(Context)

    const handleAddComment = event => {
        event.preventDefault()


        const { target: { text: { value: text } } } = event

        try {
            addCommentToPost(sessionStorage.token, postId, text)
                .then(() => {
                    handleCloseModal()
        
                    setFeedback({ level: 'info', message: 'Comment added successfully' })

                    handleNewComments()
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
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