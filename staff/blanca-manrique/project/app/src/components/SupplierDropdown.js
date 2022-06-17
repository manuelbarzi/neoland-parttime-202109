function SupplierDropdown({supplier}) {
    return <div className='Supplier__info'>
        <p>Contact person: {supplier.contactPerson}</p>
        <p>Trade Assurance: {supplier.tradeAssurance}</p>
        <p>E-mail: {supplier.email}</p>
        <p>Phone: {supplier.phone}</p>
        <p>Web: {supplier.web}</p>
        <p>Adress: {supplier.adress}</p>
    </div>
}
export default SupplierDropdown