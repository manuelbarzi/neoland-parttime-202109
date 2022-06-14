import { useState, useEffect } from 'react'
import { retrieveAllPosts, retrievePostsBy } from '../logic'
import Post from './Post'
import { errors } from 'commons'
const { AuthError } = errors

function Feed({ category, subject, user }) {
    const [posts, setPosts] = useState([])
    const [refresh, setRefresh] = useState(false)

    const loadUserPosts = () => {
        try {
            retrieveAllPosts(sessionStorage.token)
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

    const loadUserPostsBy = () => {
        try {
            retrievePostsBy(sessionStorage.token, category, subject)
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
            loadUserPostsBy()
        }
        else {
            loadUserPosts()
        }
    }

    useEffect(() => {
        loadFilterPosts()
    }, [category, subject, refresh])

    const handleRefresh = () => {
        setRefresh(!refresh)
    }


    return <div className='feed'>
        {
            posts.length ?
                <ul> {posts.map(post => <li key={post.id}> <Post post={post} user={user} handleRefresh={handleRefresh}/></li>)}
                </ul> :
                <p>Sorry, there are no posts to show</p>
        }
    </div>
}

export default Feed