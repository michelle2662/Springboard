import {useState, useEffect} from 'react'
import {v4 as uuid } from 'uuid'
import ItemForm from "./ItemForm"
import InventoryDisplay from "./InventoryDisplay"



function SpacecraftBuilder() {

    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems(prevItems => [...prevItems, {...newItem, id: uuid()}])

    }

    const deleteItem = (item) => {
        setItems(prevItems.filter(prevItem => prevItem.id !== item.id))
    }

    useEffect(() => {
        console.log("Updated items:", items);
      }, [items]);


    return (
        <>
            <div className = "item-form">
                <ItemForm addItem = {addItem} />
            </div>

            <div className = "inventory-display">
                {items.map(item =>  <InventoryDisplay key = {item.id} id = {item.id}  name = {item.name} qty = {item.qty} purpose = {item.purpose} delete = {deleteItem} />)}
            </div>
                
        </>

        
    ) 



}

export default SpacecraftBuilder