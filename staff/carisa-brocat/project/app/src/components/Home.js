import './Home.css'
import { useState } from 'react'
import { retrieveUser, retrieveAllPosts } from '../logic'
import Quiz from './Quiz'
import Post from './Post'
import SubjectSelector from './SubjectSelector'
import { useEffect } from 'react';
import { errors } from 'commons'
import CategorySelector from './CategorySelector'
const { AuthError } = errors

function Home({ onLoggedOut }) {
    const [user, setUser] = useState()
    const [posts, setPosts] = useState([])
    const [quizPassed, setQuizPassed] = useState(false)

    const loadUser = () => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)
                    setQuizPassed(user.quizPassed)
                })
                .catch(error => {

                    alert(error.message)
                })
        } catch (error) {
            if (error instanceof AuthError)
                delete sessionStorage.token

            alert(error.message)
        }
    }

    const loadPosts = () => {
        try {
            retrieveAllPosts(sessionStorage.token)
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            if (error instanceof AuthError)
                delete sessionStorage.token

            alert(error.message)
        }
    }

    useEffect(() => {
        loadUser()

        loadPosts()
    }, [])

    const logOut = () => {
        delete sessionStorage.token

        onLoggedOut()
    }



    const handleQuizPassed = () => setQuizPassed(true)

    return <div className='home'>
        {user && quizPassed && <div>
            <div className='home__header'>
                <h1>Logo</h1>
                <h2>All</h2>
                <div>
                    <h2>{user.nickname}</h2>
                    <button onClick={logOut}>LogOut</button>
                </div >
            </div>
            <div className='home__body'>
                <SubjectSelector />
                {
                    posts.length ?
                        <ul> {posts.map(post => <li key={post.id}> <Post post={post} /></li>)}
                        </ul> :
                        <p>Sorry, there are not posts to show</p>
                }
            </div>
            <div className='home__footer'>
                <CategorySelector />
                <button className='home__button--addPost'>+</button>
            </div>
        </div>}
        {user && !quizPassed && <Quiz onQuizPassed={handleQuizPassed} />}
    </div>
}

export default Home