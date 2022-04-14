import { createNote } from '../logic'
import './Note.css'

export default function CreateNote({ onCreated }) {
    const handleCreateNote = event => {
        event.preventDefault()

        const { target: {
            text: { value: text },
            color: { value: color },
            public: { checked: _public }
        } } = event

        try {
            createNote(sessionStorage.token, text, color, _public)
                .then(() => onCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            <section className='bg-white rounded-xl p-5'>
                <form className='flex flex-col gap-5' onSubmit={handleCreateNote}>
                    <textarea name="text"></textarea>

                    <select name="color">
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                    </select>

                    <p className="flex items-center gap-2">
                    <input type="checkbox" name="public" checked="false"></input>  
                    <label>Public?</label>
                    </p>

                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Create</button>
                </form>
            </section>
        </>
    )
}