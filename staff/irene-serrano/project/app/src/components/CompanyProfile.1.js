import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveCompany, updateCompany } from '../logic'


export default function () {
    const navigate = useNavigate()
    const [company, setCompany] = useState()

    useEffect(() => {
        try {
            retrieveCompany(sessionStorage.token)
                .then((company) => setCompany(company))
        }
        catch (error) { console.error(error) }
    }, [])

    const saveCompany = (event) => {
        event.preventDefault()

        const { target:
            { name: { value: name },
              description: { value: description },
              location: { value: location },
              link: { value: link }
            } } = event

        try {
            updateCompany(sessionStorage.token, name, description, location, link)
                .then(() => console.log('compañia actualizada'))
        } catch (error) {
            console.error(error)
        }
    }

    const toggleEdit = (target) => {
        let inputTarget = document.querySelector(`input[name=${target}]`)
        if (!inputTarget) inputTarget = document.querySelector(`textarea[name=${target}]`)

        if (inputTarget.hasAttribute('disabled')) {
            inputTarget.removeAttribute('disabled')
        }
        else inputTarget.setAttribute('disabled', "")
    }

    return <div>
        <a onClick={() => navigate("/")}>back</a>
        {company ?
            <div>
                <h2>{company.name} profile manage</h2>
                <form onSubmit={saveCompany}>

                    <div className="groupfield">
                        <input type="text" name="name" value={company.name} disabled={true} />
                        <button onClick={e => {
                            e.preventDefault()
                            toggleEdit('name')
                        }}>Edit</button>
                    </div>

                    <div className="groupfield">
                        <textarea type="text" name="description" value={company.description} disabled={true} />
                        <button onClick={e => {
                            e.preventDefault()
                            toggleEdit('description')
                        }}>Edit</button>
                    </div>

                    <div className="groupfield">
                        <input type="text" name="location" value={company.location ? company.location : ""} placeholder="location" disabled={true} />
                        <button onClick={e => {
                            e.preventDefault()
                            toggleEdit('location')
                        }}>Edit</button>
                    </div>

                    <div className="groupfield">
                        <input type="text" name="link" value={company.link ? company.link : ""} placeholder="link" disabled={true} />
                        <button onClick={e => {
                            e.preventDefault()
                            toggleEdit('link')
                        }}>Edit</button>
                    </div>

                    <button type="submit">Save</button>

                </form>
            </div>
            : <h3>not found</h3>}
    </div>
}