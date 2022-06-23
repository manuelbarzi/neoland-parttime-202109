import { updateUser } from '../logic'
import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

function UserConfigurations({ }) {
   

    return <form className="userConfiguration" onSubmit={handleCreatePost}>
        <div>
            <label>Hair Texture</label>
            <select id='category' name='category' defaultValue='4b' onChange={handleCategorySelected}>
                <option value='3a'>3a</option>
                <option value='3b'>3b</option>
                <option value='3c'>3c</option>
                <option value='4a'>4a</option>
                <option value='4b'>4b</option>
                <option value='4c'>4c</option>
            </select>
        </div>
        <div>
            <label> Interests</label>
            <select id='interests' name='Interests' defaultValue='moisture'>
                <option value='moisture'>Moisture</option>
                <option value='definition'>Definition</option>
                <option value='restore'>Restore</option>
                <option value='definition'>Definition</option>
                <option value='strength'>Strength</option>
            </select>
        </div>
        <button type="submit">Modify</button>
    </form>
}

export default UserConfigurations