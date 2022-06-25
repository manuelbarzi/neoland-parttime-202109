export default function({onDeleted, onCancel}){
    return <div className="ConfirmDeleteUser">
        <p className="ConfirmDeleteUser__text">This action will delete your profile definitively.</p>
        <h3 className="ConfirmDeleteUser__text">Are you sure you want to continue?</h3>
        
        <button className="ConfirmDeleteUser__deleteButton" onClick={()=>onDeleted()}>Yes, delete it</button>
        <button className="ConfirmDeleteUser__cancelButton" onClick={()=>onCancel()}>Cancel</button>
    </div>
}