export default function filterVariants(query, variants) {
    let filteredVariants = variants

    if (query !== '')
        filteredVariants = variants.filter(variant =>
            variant.color.toLowerCase().includes(query.toLowerCase()) || 
            variant.size.toLowerCase().includes(query.toLowerCase())
        )

    return filteredVariants
}