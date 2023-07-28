import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import handleFormSubmit from "./eventHandlers/handleFormSubmit.js";
import "./styles/editItem.css";
import { useState } from "react";
import FormInput from "./components/formInput/FormInput.jsx";

export default function EditItem() {
    const { itemId } = useParams();
    const navigate = useNavigate();
    const product = useLoaderData();

    const [inputValues, setInputValues] = useState((product) ? {...product} : { id: itemId });

    return (
        <form onSubmit={(ev => {
            ev.preventDefault();
            handleFormSubmit(inputValues);
            navigate("/stock-items");
        })}>
            <div id="inputs-frame">
                <FormInput label={"Name"} type={"text"} id={"name"} setInputValues={setInputValues} inputValues={inputValues} product={product} />
                <FormInput label={"Price"} type={"number"} id={"price"} setInputValues={setInputValues} inputValues={inputValues} product={product} />
                <FormInput label={"Amount"} type={"number"} id={"amount"} setInputValues={setInputValues} inputValues={inputValues} product={product} />
                <FormInput label={"Category"} type={"text"} id={"category"} setInputValues={setInputValues} inputValues={inputValues} product={product}
                    datalist={
                        <datalist id="categories">
                            {["Option1", "Option2", "Option3"].map(category => (<option value={category} key={category}>{category}</option>))}
                        </datalist>
                    }
                />
            </div>

            <FormInput label={"Description"} type={"description"} id={"description"} setInputValues={setInputValues} inputValues={inputValues} product={product} />

            <button type="submit">Save</button>
        </form>
    )
}