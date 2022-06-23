export default function filterOrders(query, orders) {
    let filteredOrders = orders

    if (query !== '')
        filteredOrders = orders.filter(order =>
            order.description.toLowerCase().includes(query.toLowerCase())
        )

    return filteredOrders
}