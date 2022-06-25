import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { createOffer } from "../logic"

import Feedback from './Feedback'

export default function () {
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState()
    const newOffer = event => {
        event.preventDefault()
        const { target:
            {
                title: { value: title },
                description: { value: description },
                stack: { value: stack },
                minSalary: { value: minSalary },
                maxSalary: { value: maxSalary },
                location: { value: location }
            } } = event


        try {
            createOffer(sessionStorage.token, title, description, stack, parseInt(minSalary), parseInt(maxSalary), location)
                .then(() => {
                    setFeedback({level: 'success', message: 'Offer created successfully'})
                    setTimeout(() => {
                        navigate('/my-offers')
                    }, 5000)
                })
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
            
        }
    }
    return <div className="CreateOffer">
        <a onClick={() => navigate("/")}>back</a>
        <h2 className="CreateOffer__title">New Offer</h2>
        <form className="CreateOffer__form" onSubmit={newOffer}>

            <label htmlFor="title" >Title</label>
            <input id="title" className="CreateOffer__input" type="text" name="title" placeholder="Title" required />

            <label htmlFor="description" >Description</label>
            <textarea id="description" className="CreateOffer__input" name="description" placeholder="Description" required />

            <label htmlFor="stack" >Stack</label>
            <select  id="stack" className="CreateOffer__input" name="stack"  required >
                <option disabled label="Choose your offer stack" > </option>
                <option value="full-stack">Full stack</option>
                <option value="front-end">Front end</option>
                <option value="back-end">Back end</option>
            </select>

            <label htmlFor="minSalary" >Minimun salary</label>
            <input id="minSalary" className="CreateOffer__input" type="number" min="100" name="minSalary" placeholder="Minimun salary offered" required/>

            <label htmlFor="maxSalary" >Maximum salary</label>
            <input id="maxSalary" className="CreateOffer__input" type="number" min="100" name="maxSalary" placeholder="Maximun salary offered" required/>
            
            <label htmlFor="location" >Location</label>
            <input id="location" className="CreateOffer__input" type="text" name="location" placeholder="Location" required />


            {feedback ? <Feedback level={feedback.level} message={feedback.message}/> : null}
            <button className="CreateOffer__submitButton" type="submit">Sumbit</button>

        </form>
    </div>
}