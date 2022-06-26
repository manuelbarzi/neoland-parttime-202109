export default function({onDeleted, onCancel}){
    return <div className="ConfirmDeleteOffer">
        <p className="ConfirmDeleteOffer__text">This action will delete this order definitively.</p>
        <h3 className="ConfirmDeleteOffer__text">Are you sure you want to continue?</h3>
        
        <button className="ConfirmDeleteOffer__deleteButton" onClick={()=>onDeleted()}>Yes, delete it</button>
        <button className="ConfirmDeleteOffer__cancelButton" onClick={()=>onCancel()}>Cancel</button>
    </div>
}