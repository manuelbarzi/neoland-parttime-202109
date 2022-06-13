import './Post.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toggleDislikePost, toggleLikePost, toggleSavePost, deletePost } from '../logic'
import { errors } from 'commons'
const { AuthError } = errors

export default ({ post, user, refresh }) => {
    const location = useLocation()

    const [likes, setLikes] = useState(post.likes)
    const [dislikes, setDislikes] = useState(post.dislikes)
    const [userDislikedPosts, setUserDislikedPosts] = useState(user.dislikedPosts || [])
    const [userLikedPosts, setUserLikedPosts] = useState(user.LikedPosts || [])

    const postId = post.id

    const savedStatus = user.savedPosts.includes(postId)

    const [postSaved, setPostSaved] = useState(savedStatus)

    const addUserDislikedPost = () => {
        const userNewDislikedPosts = userDislikedPosts
        userNewDislikedPosts.push(postId)
        setUserDislikedPosts(userNewDislikedPosts)
    }

    const deleteUserDislikedPost = () => {
        const userNewDislikedPosts = userDislikedPosts.filter(_postId => _postId !== postId)
        setUserDislikedPosts(userNewDislikedPosts)
    }

    const addUserLikedPost = () => {
        const userNewLikedPosts = userLikedPosts
        userNewLikedPosts.push(postId)
        setUserLikedPosts(userNewLikedPosts)
    }

    const deleteUserLikedPost = () => {
        const userNewLikedPosts = userLikedPosts.filter(_postId => _postId !== postId)
        setUserLikedPosts(userNewLikedPosts)
    }

    const handleDislikes = () => {
        try {
            toggleDislikePost(sessionStorage.token, postId)
                .then(() => {
                    if (userDislikedPosts.includes(postId)) {
                        setDislikes(dislikes - 1)

                        deleteUserDislikedPost()
                    } else {
                        setDislikes(dislikes + 1)

                        addUserDislikedPost()

                        if (userLikedPosts.includes(postId)) {
                            setLikes(likes - 1)

                            deleteUserLikedPost()
                        }
                    }
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

    const handleLikes = () => {
        try {
            toggleLikePost(sessionStorage.token, postId)
                .then(() => {
                    if (userLikedPosts.includes(postId)) {
                        setLikes(likes - 1)

                        deleteUserLikedPost()
                    } else {
                        setLikes(likes + 1)

                        addUserLikedPost()
                        if (userDislikedPosts.includes(postId)) {
                            setDislikes(dislikes - 1)

                            deleteUserDislikedPost()
                        }
                    }
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

    const handleSavePosts = () => {
        try {
            toggleSavePost(sessionStorage.token, postId)
                .then(() => {
                    setPostSaved(!postSaved)
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

    const handleDeletePost = () => {
        try {
            deletePost(sessionStorage.token, postId)
                .then(() => refresh())
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
        {location.pathname === '/my-posts' && <button className='post__footer post__footer--deleteButton' onClick={handleDeletePost}>Delete</button>}
        {location.pathname !== '/my-posts' && <div className="post__footer">
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
            <button className={`${postSaved ? 'post__footer--saveButton post__footer-saveButton--selected' : 'post__footer--saveButton'}`} onClick={handleSavePosts}>Save</button>
        </div>}
    </div>
}