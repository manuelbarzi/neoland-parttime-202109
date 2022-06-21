function ChangeOrderStatus() {

    return <div className="Product__info">
        <form>
            <select name="status" required >
                <option disabled label="Choose a new status for your order" > </option>
                <option name="completed">Completed</option>
                <option name="cancelled">Cancelled</option>
            </select>
        </form>
    </div>
}

export default ChangeOrderStatus