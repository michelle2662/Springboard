


function ItemCard({id, name, qty, purpose, }){
    return (
        <div className="item-card">
            <h3>{name}</h3>
            <p><strong>Quantity:</strong> {qty}</p>
            <p><strong>Purpose:</strong> {purpose}</p>
        </div>
    )
}

export default ItemCard