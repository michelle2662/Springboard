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

    console.log("form data: ", formData)


    const handleSubmit = (e) => {
        e.preventDefault();

            addItem([{...formData}])
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
            <input
                id = "agreed"
                type = "checkbox"
                name = "agreed"
                checked = {formData.agreed}
                onChange = {handleChange}

                required></input>

            <input

                id = "add"
                type = "submit"
                value = "Add"
                

            
            ></input>

        </form>
    )

}

export default ItemForm