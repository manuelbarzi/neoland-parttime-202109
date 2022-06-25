import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { retrieveOffer, updateOffer, deleteOffer } from "../logic"

export default function () {
    const { offerId } = useParams()
    const [offer, setOffer] = useState()
    const navigate =  useNavigate()

    useEffect(() => {
        try {
            retrieveOffer(offerId, sessionStorage.token)
                .then((offer) => setOffer(offer))
        }
        catch (error) { console.error(error) }
    }, [])


    const toggleEdit = (target) => {
        let inputTarget = document.querySelector(`input[name=${target}]`)
        if (!inputTarget) inputTarget = document.querySelector(`textarea[name=${target}]`)

        if (inputTarget.hasAttribute('disabled')) {
            inputTarget.removeAttribute('disabled')
        }
        else inputTarget.setAttribute('disabled', "")
    }

    const saveOffer = (event) => {
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
            updateOffer(sessionStorage.token, offerId, title, description, stack, minSalary, maxSalary, location)
                .then(() => console.log('oferta actualizada'))
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = () => {
            try {
                deleteOffer(sessionStorage.token, offerId)
                .then(()=>{
                    console.log('oferta borrada')
                    navigate('/my-offers')
                })
            } catch (error) {
                console.error(error)
            }
    }

    return <div>
        {offer ?
            <div className="EditOffer_content">
                <form onSubmit={saveOffer}>
                    <h1>{offer.title}</h1>
                    <div className="form__groupfield">
                        <input type="text" name="title" value={offer.title} disabled={true} />
                        <button className="form__editButton" onClick={e => {
                            e.preventDefault()
                            toggleEdit('title')
                        }}>✎</button>
                    </div>
                    <div className="form__groupfield">
                        <textarea type="text" name="description" value={offer.description} disabled={true} />
                        <button className="form__editButton" onClick={e => {
                            e.preventDefault()
                            toggleEdit('description')
                        }}>✎</button>
                    </div>
                    <div className="form__groupfield">
                        <select name="stack" defaultValue={offer.stack}>
                            <option value="full-stack" > Full stack </option>
                            <option value="front-end" >Front end</option>
                            <option value="back-end" >Back end</option>
                        </select>
                        <button className="form__editButton" > </button>
                    </div>
                    <div className="form__groupfield">
                        <input type="number" name="minSalary" value={offer.minSalary} disabled={true} />
                        <button className="form__editButton" onClick={e => {
                            e.preventDefault()
                            toggleEdit('minSalary')
                        }}>✎</button>
                    </div>

                    <div className="form__groupfield">
                        <input type="number" name="maxSalary" value={offer.maxSalary} disabled={true} />
                        <button className="form__editButton" onClick={e => {
                            e.preventDefault()
                            toggleEdit('maxSalary')
                        }}>✎</button>
                    </div>
                    <div className="form__groupfield">
                        <input type="text" name="location" value={offer.location} disabled={true} />
                        <button className="form__editButton" onClick={e => {
                            e.preventDefault()
                            toggleEdit('location')
                        }}>✎</button>
                    </div>

                 

                    <button type="submit">Save</button>

                </form>

                <button className="Edit__deleteButton" onClick={() => handleDelete()}>
                Delete offer
                </button>
            </div>

            : <h1>Offer not found</h1>}
    </div>


}