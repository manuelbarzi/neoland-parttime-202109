import './SupplierDropdown.css'

function SupplierDropdown({ supplier }) {
    return <div className='SupplierDrop'>
        <div className='SupplierDrop__body'>
            <table className='SupplierDrop__table' key={supplier.id}>
                <thead className='SupplierDrop__table-header'>
                    <tr>
                        <th>Contact person</th>
                        <th>Trade Assurance</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Web</th>
                        <th>Adress</th>
                    </tr>
                </thead>
                <tbody className='SupplierDrop__table-body'>
                    <tr>
                        <td>{supplier.contactPerson}</td>
                        <td>{supplier.tradeAssurance}YES</td>
                        <td>{supplier.email}</td>
                        <td>{supplier.phone}</td>
                        <td>
                            <a target="_black" href={supplier.web}>{supplier.name}</a>
                        </td>
                        <td>{supplier.adress}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
export default SupplierDropdown