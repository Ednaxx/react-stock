import { useNavigate, useParams } from "react-router-dom";
import "./styles/editItem.css";
import { useContext, useState } from "react";
import FormInput from "./components/formInput/FormInput.jsx";
import { StockContext } from "../entities/StockContext.jsx";
import Item from "../entities/Item";


export default function EditItem() {
    const { getItem, addItem, updateItem } = useContext(StockContext);
    const { itemId } = useParams();
    const item = (itemId) ? getItem(itemId) : null;
    
    const [inputValues, setInputValues] = useState((itemId) ? {...item} : {});
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        if (itemId) updateItem(itemId, inputValues);
        else {
            const newItem = new Item({...inputValues, price: +inputValues.price, amount: +inputValues.amount});
            addItem(newItem);
        }

        navigate("/stock-items");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id="inputs-frame">
                <FormInput label={"Name"} type={"text"} id={"name"} setInputValues={setInputValues} inputValues={inputValues} item={item} />
                <FormInput label={"Price"} type={"number"} id={"price"} setInputValues={setInputValues} inputValues={inputValues} item={item} />
                <FormInput label={"Amount"} type={"number"} id={"amount"} setInputValues={setInputValues} inputValues={inputValues} item={item} />
                <FormInput label={"Category"} type={"text"} id={"category"} setInputValues={setInputValues} inputValues={inputValues} item={item}
                    datalist={
                        <datalist id="categories">
                            {["Option1", "Option2", "Option3"].map(category => (<option value={category} key={category}>{category}</option>))}
                        </datalist>
                    }
                />
            </div>

            <FormInput label={"Description"} type={"description"} id={"description"} setInputValues={setInputValues} inputValues={inputValues} item={item} />

            <button type="submit">Save</button>
        </form>
    )
}