export default function filterSuppliers(query, suppliers) {
    let filteredSuppliers = suppliers

    if (query !== '')
        filteredSuppliers = suppliers.filter(supplier =>
            supplier.name.toLowerCase().includes(query.toLowerCase())
        )

    return filteredSuppliers
}