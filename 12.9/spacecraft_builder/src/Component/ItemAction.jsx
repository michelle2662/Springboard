
function ItemAction({item, deleteItem}){

    const handleClick = (e) =>{
        deleteItem(item)
    }

    return (
        <>
            <button
                onClick={handleClick}
            
            > Delete </button>
        </>
    )
}

export default ItemAction

