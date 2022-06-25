import './Home.css'
import { useState, useEffect } from 'react'
import { useLocation, Routes, Route, useNavigate, createRoutesFromChildren } from 'react-router-dom';
import { retrieveUser } from '../logic'
import Quiz from './Quiz'
import Feed from './Feed'
import UserPosts from './UserPosts'
import Modal from './Modal'
import NewPost from './NewPost'
import UserSavedPosts from './UserSavedPosts'
import SubjectSelector from './SubjectSelector'
import CategorySelector from './CategorySelector'
import UserMenu from './UserMenu';
import Unregister from './Unregister'
import UserConfigurations from './UserConfigurations';
import { useContext } from 'react'
import Context from './Context'

import { errors } from 'commons'

function Home({ onLoggedOut }) {
    const navigate = useNavigate()
    const location = useLocation()
    const { setFeedback } = useContext(Context)

    const [modalOpen, setModalOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const [postCreated, setPostCreated] = useState(false)
    const [user, setUser] = useState()
    const [subject, setSubject] = useState()
    const [category, setCategory] = useState()
    const [quizPassed, setQuizPassed] = useState(false)

    const loadUser = () => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)
                    setQuizPassed(user.quizPassed)
                })
                .catch(error => {
                    logOut()

                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            logOut()

            setFeedback({ level: 'error', message: error.message })
        }
    }

    useEffect(() => {
        loadUser()
    }, [refresh])

    const logOut = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const handleQuizPassed = () => setQuizPassed(true)

    const onSubjectSelected = subject => {
        setSubject(subject)
    }

    const onCategorySelected = category => {
        setCategory(category)
    }

    const handleMyPosts = () => {
        setRefresh(!refresh)

        navigate('/my-posts')
    }
    const handleSavedPosts = () => {
        setRefresh(!refresh)

        navigate('/my-saved-posts')
    }

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const comeBack = () => {
        if (location.pathname === '/unregister')
            navigate(-1)
        else if (location.pathname === '/my-posts' || '/my-saved-posts'){
            setRefresh(!refresh)
            navigate('/')
        }      
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handlePostCreated = () => {
        setPostCreated(!postCreated)
    }

    const handleRefresh = () => {
        setRefresh(!refresh)
    }

    const isNotInUnregisterOrConfiguration = location.pathname !== '/unregister' && location.pathname !== '/configurations'

    const appliedSubjectText = subject ? `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1) : 'All'

    return <div className='home'>
        {user && quizPassed && <div>
            <div className='home__header'>
                {location.pathname === '/' && <div className='home__header-top'>
                    <h1>Logo</h1>
                    <h2 className='home__header__filterText'>{appliedSubjectText}</h2>
                    <div className="Home__header-top__rigth">
                        <div className="Home__header-top__user">
                            <div className="Home__header-top__user__image">
                                <img src={user?.image} alt="userImage" onClick={handleMyPosts} />
                            </div>
                            <p >{user.nickname}</p>
                        </div>
                        <button onClick={logOut}>LogOut</button>
                    </div >
                </div>}
                {location.pathname !== '/' && <div className='home__header-top'>
                    <div className="Home__header-top__user">
                        <div className="Home__header-top__user__image">
                            <img src={user?.image} alt="userImage" onClick={handleMenu} />
                        </div>
                        <p >{user.nickname}</p>
                    </div>
                    {isNotInUnregisterOrConfiguration && <h2 className='home__header-filterText'>{appliedSubjectText}</h2>}
                    <div>
                        <button onClick={comeBack}>Come Back</button>
                    </div >
                </div>}
                {isNotInUnregisterOrConfiguration && <div><SubjectSelector onSubjectSelected={onSubjectSelected} /></div>}
            </div>
            {isNotInUnregisterOrConfiguration && <div className='home__body'>
                <Routes>
                    <Route path="/*" element={<Feed category={category} subject={subject} user={user} postCreated={postCreated} logOut={logOut} />} />
                    <Route path="/my-posts/*" element={<UserPosts category={category} subject={subject} user={user} postCreated={postCreated} logOut={logOut} />} />
                    <Route path="/my-saved-posts/*" element={<UserSavedPosts category={category} subject={subject} user={user} postCreated={postCreated} logOut={logOut} />} />
                </Routes>
            </div>}
            {isNotInUnregisterOrConfiguration && <div className='home__footer'>
                <CategorySelector onCategorySelected={onCategorySelected} />
                <button className='home__button--addPost' onClick={handleOpenModal}>+</button>
            </div>}
        </div>}
        {user && !quizPassed && <Quiz onQuizPassed={handleQuizPassed} />}

        {modalOpen && <Modal handleCloseModal={handleCloseModal} content={<NewPost handleCloseModal={handleCloseModal} handlePostCreated={handlePostCreated} />} />}

        <UserMenu menuOpen={menuOpen} handleSavedPosts={handleSavedPosts} handleMenu={handleMenu} handleMyPosts={handleMyPosts} onLoggedOut={logOut} />

        <Routes>
            <Route path="/unregister/*" element={<Unregister logOut={logOut} />} />
            <Route path="/configurations/*" element={<UserConfigurations user={user} logOut={logOut} handleRefresh={handleRefresh} />} />
        </Routes>

    </div>
}

export default Home