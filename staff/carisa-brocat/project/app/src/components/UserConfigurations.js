import './UserConfigurations.css'
import { updateUser } from '../logic'
import { errors } from 'commons'
import { useState } from 'react'
import UpdateUserEmail from './UpdateUserEmail'
import UpdateUserPassword from './UpdateUserPassword'
import { useContext } from 'react'
import Context from './Context'
import uploadImage from './helps/uploadImage'

const { AuthError, NotFoundError } = errors

function UserConfigurations({ user, handleRefresh }) {
    const { setFeedback } = useContext(Context)

    const userNickname = user?.nickname
    const userHairTexture = user?.hairTexture

    const [onChangePassword, setOnChangePassword] = useState(false)
    const [onChangeEmail, setOnChangeEmail] = useState(false)
    const [imageB64, setImageB64] = useState()
    const userImage = imageB64?? user?.image

    const handleUploadImage = (event)=>{
        uploadImage(event, setImageB64)
    }

    const handleShowChangePassword = () => {
        setOnChangePassword(!onChangePassword)
    }

    const handleShowChangeEmail = () => {
        setOnChangeEmail(!onChangeEmail)
    }

    const handleUpdateUser = event => {
        event.preventDefault()

        const { target: { nickname: { value: nickname }, hairTexture: { value: hairTexture }, interests } } = event

        const interestsArray = []

        interests.forEach(interest => {
            if (interest.checked) {
                interestsArray.push(interest.value)
            }
        })

        try {
            updateUser(sessionStorage.token, nickname, userImage, hairTexture, interestsArray)
                .then(() => {
                    handleRefresh()

                    setFeedback({ level: 'info', message: 'User changed successfully' })
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div className="userConfiguration">
        <h1 className="userConfiguration__title">Configuration</h1>
        {onChangePassword ? <UpdateUserPassword handleShowChangePassword={handleShowChangePassword} />
            :
            (onChangeEmail ? <UpdateUserEmail handleShowChangeEmail={handleShowChangeEmail} />
                :
                <div className="userConfiguration__general">
                    <form className="userConfiguration__form" onSubmit={handleUpdateUser}>
                        <img src={userImage} alt="UserImage" />
                        <input type="file" name="image" onChange={handleUploadImage} />
                        <input type="text" name="nickname" defaultValue={userNickname} />
                        <div className='userConfiguration__hairTexture'>
                            <label>Hair Texture</label>
                            <select id='hairTexture' name='hairTexture' >
                                <option value='3a'>3a</option>
                                <option value='3b'>3b</option>
                                <option value='3c'>3c</option>
                                <option value='4a'>4a</option>
                                <option value='4b'>4b</option>
                                <option value='4c'>4c</option>
                            </select>
                        </div>
                        <div className='userConfiguration__interests'>
                            <h2> Interests</h2>
                            <label>
                                <input type='checkbox' name='interests' value='growth' />
                                growth
                            </label>

                            <label>
                                <input type='checkbox' name='interests' value='strength' />
                                strength
                            </label>

                            <label>
                                <input type='checkbox' name='interests' value='moisture' />
                                moisture
                            </label>

                            <label>
                                <input type='checkbox' name='interests' value='restore' />
                                restore
                            </label>

                            <label>
                                <input type='checkbox' name='interests' value='definition' />
                                definition
                            </label>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                    <button onClick={handleShowChangeEmail}>Change Email</button>
                    <button onClick={handleShowChangePassword}>Change Password</button>
                </div>)}
    </div>
}

export default UserConfigurations

