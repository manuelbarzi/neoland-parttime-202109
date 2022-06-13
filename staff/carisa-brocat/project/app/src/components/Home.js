import './Home.css'
import { useState, useEffect } from 'react'
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';
import { retrieveUser } from '../logic'
import Quiz from './Quiz'
import Feed from './Feed'
import MyPosts from './MyPosts'
import Modal from './Modal'
import NewPost from './NewPost'
import SubjectSelector from './SubjectSelector'
import { errors } from 'commons'
import CategorySelector from './CategorySelector'
const { AuthError } = errors

function Home({ onLoggedOut }) {
    const navigate = useNavigate()
    const location = useLocation()

    const [modalOpen, setModalOpen] = useState(false)

    const [user, setUser] = useState()
    const [category, setCategory] = useState()
    const [subject, setSubject] = useState()
    const [quizPassed, setQuizPassed] = useState(false)

    const loadUser = () => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)
                    setQuizPassed(user.quizPassed)
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
        loadUser()
    }, [])

    const logOut = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const handleQuizPassed = () => setQuizPassed(true)

    const handleSubject = subject => {
        setSubject(subject)
    }

    const handleCategory = category => {
        setCategory(category)
    }

    const handleGoToMyPosts = () => {
        navigate('/my-posts')
    }

    const handleOpenMenu = () => {

    }

    const comebackToHome = () => {
        navigate('/')
    }

    const handleOpenAndCloseModal = () => {
        setModalOpen(!modalOpen)
    }

    const appliedSubjectText = subject ? `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1) : 'All'

    return <div className='home'>
        {user && quizPassed && <div>
            <div className='home__header'>
                {location.pathname === '/' && <div className='home__header-top'>
                    <h1>Logo</h1>
                    <h2 className='home__header-filterText'>{appliedSubjectText}</h2>
                    <div>
                        <h2 onClick={handleGoToMyPosts}>{user.nickname}</h2>
                        <button onClick={logOut}>LogOut</button>
                    </div >
                </div>}
                {location.pathname !== '/' && <div className='home__header-top'>
                    <h2 onClick={handleOpenMenu}>{user.nickname}</h2>
                    <h2 className='home__header-filterText'>{appliedSubjectText}</h2>
                    <div>
                        <button onClick={comebackToHome}>Come Back</button>
                    </div >
                </div>}
                <div><SubjectSelector onSelectedSubject={handleSubject} /></div>
            </div>
            <div className='home__body'>
                <Routes>
                    <Route path="/*" element={<Feed category={category} subject={subject} user={user} />} />
                    <Route path="/my-posts/*" element={<MyPosts category={category} subject={subject} user={user} />} />
                </Routes>
            </div>
            <div className='home__footer'>
                <CategorySelector onSelectedCategory={handleCategory} />
                <button className='home__button--addPost' onClick={handleOpenAndCloseModal}>+</button>
            </div>
        </div>}
        {user && !quizPassed && <Quiz onQuizPassed={handleQuizPassed} />}

        {modalOpen && <Modal content={<NewPost closeaAndOpenModal={handleOpenAndCloseModal} />} />}
    </div>
}

export default Home