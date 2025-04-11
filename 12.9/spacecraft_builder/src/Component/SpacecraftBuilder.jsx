import {useState, useEffect} from 'react'
import {v4 as uuid } from 'uuid'
import ItemForm from "./ItemForm"
import InventoryDisplay from "./InventoryDisplay"



function SpacecraftBuilder() {

    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems(prevItems => [...prevItems, {...newItem, id: uuid()}])

    }

    const deleteItem = (itemToRemove) => {
        setItems(items.filter(item => item.id !== itemToRemove.id))
    }

    useEffect(() => {
        console.log("Updated items:", items);
      }, [items]);


    return (
        <div className = "spacecraft-builder">
            <h2> Add an Item to the Inventory</h2>

            <div className = "item-form">
                <ItemForm addItem = {addItem} />
            </div>

            <br></br>
            <br></br>

            <h2> Inventory Display </h2>
           <div className = "inventory-display">
                <InventoryDisplay items = {items} deleteItem ={deleteItem}/>
           </div>
                
        </div>

        
    ) 



}

export default SpacecraftBuilder