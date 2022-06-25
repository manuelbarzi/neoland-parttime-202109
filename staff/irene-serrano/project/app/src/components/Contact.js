import Feedback from "./Feedback"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { contactTindev } from "../logic"

export default function () {
    const navigate = useNavigate()

    const [feedback, setFeedback] = useState()

    const sendContactTindev = (event) =>{
        event.preventDefault()

        const { target:
            { 
                name: { value: name },
                email: { value: email },
                message: { value: message },
                
            } } = event

        try {
            contactTindev({ name, email, message})
            .then(()=>{
                setFeedback({level:'success', message: 'Success! Tindev will contact you in few days'})
            })
            .catch((error)=>{
                setFeedback({level:'error', message: error.message})
            })
        } catch (error) {
            setFeedback({level:'error', message: error.message})
        }
    }

    return <div className="Contact">
        <a onClick={() => navigate("/")}>back</a>
      
            <>
                <h2 className="Contact__title">Contact</h2>
                <form className="Contact__form" onSubmit={sendContactTindev}>


                    <label htmlFor="message" >Message</label>
                    <textarea id="message" className="Contact__input" type="text" name="message" placeholder="Your message..." required={true} />

                    <label htmlFor="name" >Name</label>
                    <input id="name" className="Contact__input" type="text" name="name"  placeholder="Name" required={true} />


                    <label htmlFor="email" >Your email</label>
                    <input id="email" className="Contact__input" type="email" name="email" placeholder="Email" required={true} />

                  
                    {feedback ? <Feedback level={feedback.level} message={feedback.message} /> : null}
                    <button className="Contact__submitButton" type="submit">Send</button>

                </form>

            </>
         
           
    </div>
}