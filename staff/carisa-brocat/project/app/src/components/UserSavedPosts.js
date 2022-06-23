import { useState, useEffect } from 'react'
import { retrieveUserSavedPosts, retrieveUserSavedPostsBy } from '../logic'
import { errors } from 'commons'
import Post from './Post'
const { AuthError, NotFoundError } = errors

function UserSavedPosts({ category, subject, user, postCreated }) {
    const [posts, setPosts] = useState([])
    const [postUnsaved, setPostUnsaved] = useState(false)

    const loadUserSavedPosts = () => {
        try {
            retrieveUserSavedPosts(sessionStorage.token)
                .then(posts => {
                    setPosts(posts)
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

    const loadUserSavedPostBy = () => {
        try {
            retrieveUserSavedPostsBy(sessionStorage.token, category, subject)
                .then(posts => {
                    setPosts(posts)
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

    const loadFilterPosts = () => {
        if (category || subject) {
            loadUserSavedPostBy()
        }
        else {
            loadUserSavedPosts()
        }
    }

    useEffect(() => {
        loadFilterPosts()
    }, [category, subject, postCreated, postUnsaved])

    const handleUnsavePost = () => {
        setPostUnsaved(true)
    }


    return <div className='userSavedPosts'>
        {
            posts.length ?
                <ul> {posts.map(post => <li key={post.id}> <Post postId={post.id} user={user} handleUnsavePost={handleUnsavePost} /></li>)}
                </ul> :
                <p>Sorry, there are no posts to show</p>
        }
    </div>
}

export default UserSavedPosts