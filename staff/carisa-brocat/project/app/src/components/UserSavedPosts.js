import { useState, useEffect } from 'react'
import { retrieveUserSavedPosts } from '../logic'
import { errors } from 'commons'
import Post from './Post'
const { AuthError } = errors

function UserSavedPosts({ user, postCreated }) {
    const [posts, setPosts] = useState([])

    const loadUserSavedPosts = () => {
        try {
            retrieveUserSavedPosts(sessionStorage.token)
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

    useEffect(() => {
        loadUserSavedPosts()
    }, [postCreated])


    return <div className='UserSavedPosts'>
        {
            posts.length ?
                <ul> {posts.map(post => <li key={post.id}> <Post post={post} user={user} /></li>)}
                </ul> :
                <p>Sorry, there are no posts to show</p>
        }
    </div>
}

export default UserSavedPosts