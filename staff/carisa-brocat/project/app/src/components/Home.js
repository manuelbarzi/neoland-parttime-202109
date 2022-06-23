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
import { errors } from 'commons'
import CategorySelector from './CategorySelector'
import UserMenu from './UserMenu';
import Unregister from './Unregister'
const { AuthError, NotFoundError } = errors

function Home({ onLoggedOut }) {
    const navigate = useNavigate()
    const location = useLocation()

    const [modalOpen, setModalOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

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

                    alert(error.message)
                })
        } catch (error) {
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

    const onSubjectSelected = subject => {
        setSubject(subject)
    }

    const onCategorySelected = category => {
        setCategory(category)
    }

    const handleMyPosts = () => {
        navigate('/my-posts')
    }
    const handleSavedPosts = () => {
        navigate('/my-saved-posts')
    }

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const comeBack = () => {
        if (location.pathname === '/unregister')
            navigate(-1)
        else if (location.pathname === '/my-posts' || '/my-saved-posts')
            navigate('/')
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

    const appliedSubjectText = subject ? `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1) : 'All'

    return <div className='home'>
        {user && quizPassed && <div>
            <div className='home__header'>
                {location.pathname === '/' && <div className='home__header-top'>
                    <h1>Logo</h1>
                    <h2 className='home__header-filterText'>{appliedSubjectText}</h2>
                    <div>
                        <h2 onClick={handleMyPosts}>{user.nickname}</h2>
                        <button onClick={logOut}>LogOut</button>
                    </div >
                </div>}
                {location.pathname !== '/' && <div className='home__header-top'>
                    <h2 onClick={handleMenu}>{user.nickname}</h2>
                    {location.pathname !== '/unregister' && <h2 className='home__header-filterText'>{appliedSubjectText}</h2>}
                    <div>
                        <button onClick={comeBack}>Come Back</button>
                    </div >
                </div>}
                {location.pathname !== '/unregister' && <div><SubjectSelector onSubjectSelected={onSubjectSelected} /></div>}
            </div>
            {location.pathname !== '/unregister' && <div className='home__body'>
                <Routes>
                    <Route path="/*" element={<Feed category={category} subject={subject} user={user} postCreated={postCreated} />} />
                    <Route path="/my-posts/*" element={<UserPosts category={category} subject={subject} user={user} postCreated={postCreated} />} />
                    <Route path="/my-saved-posts/*" element={<UserSavedPosts category={category} subject={subject} user={user} postCreated={postCreated} />} />
                </Routes>
            </div>}
            {location.pathname !== '/unregister' && <div className='home__footer'>
                <CategorySelector onCategorySelected={onCategorySelected} />
                <button className='home__button--addPost' onClick={handleOpenModal}>+</button>
            </div>}
        </div>}
        {user && !quizPassed && <Quiz onQuizPassed={handleQuizPassed} />}

        {modalOpen && <Modal handleCloseModal={handleCloseModal} content={<NewPost handleCloseModal={handleCloseModal} handlePostCreated={handlePostCreated} />} />}
        
        <UserMenu menuOpen={menuOpen} handleSavedPosts={handleSavedPosts} handleMenu={handleMenu} handleMyPosts={handleMyPosts} onLoggedOut={logOut} />

        <Routes>
            <Route path="/unregister/*" element={<Unregister logOut={logOut} />} />
            {/* <Route path="/configurations/*" element={<Configurations />} /> */}
        </Routes>

    </div>
}

export default Home