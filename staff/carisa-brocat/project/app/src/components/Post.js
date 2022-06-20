import './Post.css'
import Modal from './Modal'
import PostComments from './PostComments'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toggleDislikePost, toggleLikePost, toggleSavePost, deletePost, retrievePost } from '../logic'
import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

export default ({ postId, user, handlePostDeleted, handleUnsavePost }) => {
    const location = useLocation()
    const [modalOpen, setModalOpen] = useState(false)
    const [post, setPost] = useState()

    const [likes, setLikes] = useState()
    const [dislikes, setDislikes] = useState()
    const [userDislikedPosts, setUserDislikedPosts] = useState(user.dislikedPosts || [])
    const [userLikedPosts, setUserLikedPosts] = useState(user.LikedPosts || [])
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState(false)

    const savedStatus = user.savedPosts.includes(postId)

    const [postSaved, setPostSaved] = useState(savedStatus)

    const loadPost = () => {
        try {
            retrievePost(sessionStorage.token, postId)
                .then(post => {
                    setPost(post)
                    setLikes(post.likes)
                    setDislikes(post.dislikes)
                    setComments(post.comments)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadPost()
    }, [newComment])


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

    const handleSavePosts = () => {
        try {
            toggleSavePost(sessionStorage.token, postId)
                .then(() => {
                    if (location.pathname === '/my-saved-posts') {
                        handleUnsavePost()
                    }

                    setPostSaved(!postSaved)
                })
                .catch(error => {
                    if (error instanceof NotFoundError & error.message.includes('user') & error.message.includes('not found'))
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

    const handleDeletePost = () => {
        try {
            deletePost(sessionStorage.token, postId)
                .then(() => handlePostDeleted())
                .catch(error => {
                    if (error instanceof NotFoundError & error.message.includes('user') & error.message.includes('not found'))
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

    const onComments = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleNewComments = () => {
        setNewComment(true)
    }


    return <div className="post">
        {post ? <div> <div className="post__header">
            <p>{post.userNickname}</p>
            <p>{post.subject}</p>
        </div>
            <div className="post__body">
                <h1 className="post__body-title">{post.title}</h1>
                <div className="post__body-description">
                    <p>{post.image}</p>
                    <p>{post.description}</p>
                    <p>{post.address}</p>
                </div>
            </div>
            {location.pathname === '/my-posts' && <button className='post__footer post__footer--deleteButton' onClick={handleDeletePost}>Delete</button>}
            {location.pathname !== '/my-posts' && <div className="post__footer">
                <div className="post__footer post__footer--displayrow">
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
                    <button className={`${postSaved ? 'post__footer--saveButton post__footer-saveButton--selected' : 'post__footer--saveButton'}`} onClick={handleSavePosts} >Save</button>
                </div>
                <h3 onClick={onComments}>Comments {comments.length}</h3>
            </div>}</div> :
            0}

        {modalOpen && <Modal handleCloseModal={handleCloseModal} content={<PostComments handleCloseModal={handleCloseModal} postId={postId} comments={comments} handleNewComments={handleNewComments} />} />}
    </div>
}