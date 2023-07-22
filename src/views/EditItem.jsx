import { useParams } from "react-router-dom";
import handleFormSubmit from "../handleFormSubmit";
import "./styles/editItem.css";
import { useState } from "react";

export default function EditItem() {
    const { urlItemId } = useParams();
    const [ inputValues, setInputValues ] = useState({urlItemId});


    return (
        <form onSubmit={(ev => {
            ev.preventDefault();
            handleFormSubmit(inputValues);
        })}>
            <div id="inputs-frame">
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required onChange={ev => setInputValues({...inputValues, name: ev.target.value})}/>
                </div>

                <div className="inputs">
                    <label htmlFor="price">Price</label>
                    <input type="number" min={0} id="price" name="price" required onChange={ev => setInputValues({...inputValues, price: ev.target.value})}/>
                </div>

                <div className="inputs">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min={0} id="amount" name="amount" required onChange={ev => setInputValues({...inputValues, amount: ev.target.value})}/>
                </div>

                <div className="inputs">
                    <label htmlFor="category">Category</label>
                    <input type="text" list="categories" id="category" name="category" required onChange={ev => setInputValues({...inputValues, category: ev.target.value})}></input>
                    <datalist id="categories">
                        {["Option1", "Option2", "Option3"].map(category => (<option value={category} key={category}>{category}</option>))}
                    </datalist>
                </div>

            </div>
            <div className="inputs">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows={10} required onChange={ev => setInputValues({...inputValues, description: ev.target.value})}></textarea>
            </div>

            <button type="submit">Save</button>
        </form>
    )
}