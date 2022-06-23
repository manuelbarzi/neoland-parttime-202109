export default function filterProducts(query, products) {
    let filteredProducts = products

    if (query !== '')
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) || 
            product.category.toLowerCase().includes(query.toLowerCase())
        )

    return filteredProducts
}