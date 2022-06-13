import './Modal.css'
import { errors } from 'commons'
const { AuthError } = errors

export default ({ content }) => {
    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    return <div className='modal' onClick={handleClickOnContent}>
        {content}
    </div>
}
