import ItemCard from "./ItemCard"
import ItemAction from "./ItemAction"



function InventoryDisplay({items, deleteItem}){

console.log("items: ", items)

    return(
        <>
             <div className = "inventory-display">
                {items.map(item =>  (
                    <div className = "item-wrapper" key = {item.id}>
                        <ItemCard  id = {item.id}  name = {item.name} qty = {item.qty} purpose = {item.purpose}  />
                        <ItemAction  item = {item} deleteItem= {deleteItem}/>
                    </div>
                    
                    ))}
                
            </div>
          
        </>
    )
}

export default InventoryDisplay