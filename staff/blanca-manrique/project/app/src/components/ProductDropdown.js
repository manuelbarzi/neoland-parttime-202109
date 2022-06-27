import './ProductDropdown.css'

function ProductDropdown({ product }) {
    return <div className="Product__info">
        <div className='ProductDrop__body'>
            <h3 className='Product__body-title'>ID from supplier: {product.supplierProductId}</h3>
            <table className='ProductDrop__table' key={product.id}>
                <thead className='ProductDrop__table-header'>
                    <tr>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Material</th>
                        <th>Purchase price</th>
                        <th>Sale price</th>
                        <th>Product URL</th>
                    </tr>
                </thead>
                <tbody className='ProductDrop__table-body'>
                    <tr>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>{product.model}</td>
                        <td>{product.material}</td>
                        <td>{product.price}</td>
                        <td>{product.salePrice}</td>
                        <td>
                            <a target="_black" href={product.supplierProductUrl}>{product.name}</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default ProductDropdown