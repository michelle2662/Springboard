import {useState} from "react"

function ItemForm({addItem}) {

    const INITIAL_STATE = {
        name: "",
        qty: "",
        purpose: "",
        agreed: false
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        }));

        
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        const alphaRegex = /^[a-zA-Z\s]+$/;

        if (!formData.name.trim() || !alphaRegex.test(formData.name)) {
            alert("Name must contain only letters.");
            return;
        }
    
        if (!formData.purpose.trim() || !alphaRegex.test(formData.purpose)) {
            alert("Purpose must contain only letters.");
            return;
        }
    
        // Quantity must be a valid number
        if (!formData.qty.trim() || isNaN(formData.qty)) {
            alert("Quantity must be a number.");
            return;
        }
    
        // Checkbox must be checked
        if (!formData.agreed) {
            alert("You must agree to the terms.");
            return;
        }

        addItem({...formData})
        setFormData(INITIAL_STATE)
        
        
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input
                id= "name"
                type = "text"
                name =  "name"
                placeholder="Name"
                value = {formData.name}
                onChange = {handleChange}
                required></input>
            <br></br>
            <input
                id= "qty"
                type = "text"
                name = "qty"
                placeholder="Quantity"
                value = {formData.qty}
                onChange = {handleChange}
                required></input>
            <br></br>
            <input
                id= "purpose"
                type = "text"
                name = "purpose"
                placeholder="Purpose"
                value = {formData.purpose}
                onChange = {handleChange}
                required></input>
            <br></br>
            <label htmlFor="agreed" className="checkbox-label">
            <input
                    id="agreed"
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    required
                /><span>Agree to Terms</span>
            </label>

            <input

                id = "add"
                type = "submit"
                value = "Add"
            
            ></input>

        </form>
    )

}

export default ItemForm