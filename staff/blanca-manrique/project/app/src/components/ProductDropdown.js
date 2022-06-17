function ProductDropdown({ product }) {
    return <div className="Product__info">
        <p>ID from supplier: {product.supplierProductId}</p>
        <h3>Category: {product.category}</h3>
        <p>Brand: {product.brand}</p>
        <p>Model: {product.model}</p>
        <p>Material: {product.material}</p>
        <p>Purchase price: {product.price}</p>
        <p>Sale price: {product.salePrice}</p>
        <p>Product URL: {product.supplierProductUrl}</p>
    </div>
}

export default ProductDropdown