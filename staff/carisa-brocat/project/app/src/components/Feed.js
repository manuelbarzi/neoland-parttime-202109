import { useState, useEffect } from 'react'
import { retrieveAllPosts, retrievePostsBy } from '../logic'
import Post from './Post'
import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

function Feed({ category, subject, user, postCreated }) {
    const [posts, setPosts] = useState([])

    const loadUserPosts = () => {
        try {
            retrieveAllPosts(sessionStorage.token)
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
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
                    alert(error.message)
                })
        } catch (error) {
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
    }, [category, subject, postCreated])

    return <div className='feed'>
        {
            posts.length ?
                <ul> {posts.map(post => <li key={post.id}> <Post postId={post.id} user={user} /></li>)}
                </ul> :
                <p>Sorry, there are no posts to show</p>
        }
    </div>
}

export default Feed