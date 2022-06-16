import { useState, useEffect } from 'react'
import { retrieveUserPosts, retrieveUserPostsBy } from '../logic'
import Post from './Post'
import { errors } from 'commons'
const { AuthError } = errors

function UserPosts({ category, subject, user, postCreated }) {
    const [posts, setPosts] = useState([])
    const [postDeleted, setPostDeleted] = useState(false)

    const loadUserPosts = () => {
        try {
            retrieveUserPosts(sessionStorage.token)
                .then(posts => {
                    setPosts(posts)
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

    const loadUserPostBy = () => {
        try {
            retrieveUserPostsBy(sessionStorage.token, category, subject)
                .then(posts => {
                    setPosts(posts)
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

    const loadFilterPosts = () => {
        if (category || subject) {
            loadUserPostBy()
        }
        else {
            loadUserPosts()
        }
    }

    useEffect(() => {
        loadFilterPosts()
    }, [category, subject, postDeleted, postCreated])

    const handlePostDeleted = () => {
        setPostDeleted(!postDeleted)
    }

    return <div className='userPosts'>
        {
            posts.length ?
                <ul> {posts.map(post => <li key={post.id}> <Post post={post} user={user} handlePostDeleted={handlePostDeleted} /></li>)}
                </ul> :
                <p>Sorry, there are no posts to show</p>
        }
    </div>
}

export default UserPosts