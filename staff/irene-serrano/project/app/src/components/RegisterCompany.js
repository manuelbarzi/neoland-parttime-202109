import './Register.css'
import { registerCompany, authenticateCompany } from '../logic'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Feedback from './Feedback'


export default function ({ onRegistered }) {

    const [feedback, setFeedback ] =useState()
    const navigate = useNavigate()
    const register = event => {
        event.preventDefault()

        const { target:
            { name: { value: name },
                email: { value: email },
                password: { value: password },
                description: { value: description },
                location: { value: location },
                link: { value: link }
            } } = event

        try {
            registerCompany(name, email, password, description, location, link)
                .then(() => {
                    try {
                        authenticateCompany(email, password)
                            .then(res=> {
                                const token = res
                                sessionStorage.token = token
                                onRegistered()
                            })
                            .catch(error=> {
                                delete sessionStorage.token
                                setFeedback({ level: 'error', message: error.message })
                            })
                    }catch (error){
                        delete sessionStorage.token
                        setFeedback({ level: 'error', message: error.message })
                    }
                
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }



    return <div className="Register">
        <a onClick={()=>navigate("/")}>back</a>
        <p>Want to publish an offer?</p>
        <h2 className='Register__title'>Register</h2>
        <form className='Register__form' onSubmit={register}>
            <label htmlFor="name" >Name</label>
            <input id="name" className='form__input' type="text" name="name" placeholder="Name of the company" required/>
            
            <label htmlFor="email" >Email</label>
            <input id="email" className='form__input' type="email" name="email" placeholder="Contact email" required/>
            
            <label htmlFor="password" >Password</label>
            <input id="password" className='form__input' type="password" name="password" placeholder="Password" required/>
            
            <label htmlFor="description" >Description</label>
            <textarea id="description" className='form__input' name="description" placeholder="Description" required/>
            
            <label htmlFor="location" >Location</label>
            <input id="location" className='form__input' type="text" name="location" placeholder="Location" />
            
            <label htmlFor="link" >Link</label>
            <input id="link"  className='form__input' type="text" name="link" placeholder="Link" />

            {feedback? <Feedback level={feedback.level} message={feedback.message} />: null}
            <button className="Register__button-primary-full" type="submit">Sumbit</button>
        </form>
    </div>


}