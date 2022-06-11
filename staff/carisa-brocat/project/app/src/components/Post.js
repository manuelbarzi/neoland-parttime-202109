import './Post.css'
import { useEffect, useState } from 'react'
import { toggleDislikePost, toggleLikePost, toggleSavePost } from '../logic'
import { errors } from 'commons'
const { AuthError } = errors

export default ({ post, user }) => {
    const [likes, setLikes] = useState(post.likes || 0)
    const [dislikes, setDislikes] = useState(post.dislikes || 0)

    const [userLiked, setUserLiked] = useState(user.likedPosts)
    const [userDisliked, setUserDisliked] = useState(user.dislikedPosts)

    const [savedPosts, setSavedPosts] = useState(user.savedPosts)

    const postId = post.id

    const handleDislikes = () => {
        try {
            toggleDislikePost(sessionStorage.token, postId)
                .then()
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

        

        return <div className="post">
            <div className="post__header">
                <p>{post.userNickname}</p>
                <p>{post.subject}</p>
            </div>
            <div className="post__body">
                <h1 className="post__body-title">{post.title}</h1>
                <div className="post__body-description">
                    {
                        post.image ?
                            (<p>{post.image}</p>)
                                (<p>{post.description}</p>)
                            :
                            <p>{post.description}</p>
                    }
                    <p>{post.address}</p>
                </div>
            </div>
            <div className="post__footer">
                <div className="post__footer-feedback">
                    <div className="post__footer-feedback post__footer-feedback__likes">
                        <button onClick={handleLikes}>Likes</button>
                        {
                            likes ? <p>{likes}</p> : <p>0</p>
                        }
                    </div>
                    <div className="post__footer-feedback post__footer-feedback__dislikes">
                        <button onClick={handleDislikes}>Dislikes</button>
                        {
                            dislikes ? <p>{dislikes}</p> : <p>0</p>
                        }
                    </div>
                </div>
                <button className='post__footer--saveButton' /*{</div>onClick={handleFavoritePosts}*/>SavePost</button>
            </div>

        </div>

    }