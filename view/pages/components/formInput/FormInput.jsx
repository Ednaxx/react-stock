import { useState } from "react"

export default function FormInput({ label, type, id, setInputValues, inputValues, datalist, item }) {

    const [inputValue, setInputValue] = useState(() => {
        if (!item) return "";
        if (id === "name") return item.name;
        if (id === "category") return item.category;
        if (id === "price") return item.price;
        if (id === "amount") return item.amount;
        if (id === "description") return item.description;
    });

    if (type === "text") {
        return (
            <div className="inputs">
                <label htmlFor={id}>{label}</label>
                <input type="text" id={id} name={id} required list={(datalist) ? "categories" : ""} value={inputValue}
                    onChange={
                        ev => {
                            setInputValues((id === "name") ? { ...inputValues, name: ev.target.value } : { ...inputValues, category: ev.target.value });
                            setInputValue(ev.target.value);
                        }} />
                {datalist}
            </div>
        )
    }
    else if (type === "number") {
        return (
            <div className="inputs">
                <label htmlFor={id}>{label}</label>
                <input type="number" step={(id === "price") ? '0.01' : '1'} min={0} id={id} name={id} required value={inputValue}
                    onChange={ev => {
                        setInputValues((id === "price") ? { ...inputValues, price: ev.target.value } : { ...inputValues, amount: ev.target.value });
                        setInputValue(ev.target.value);
                    }} />
            </div>
        )
    }
    else if (type === "description") {
        return (
            <div className="inputs">
                <label htmlFor={id}>{label}</label>
                <textarea name={id} id={id} rows={10} required value={inputValue} onChange={ev => {
                    setInputValues({ ...inputValues, description: ev.target.value });
                    setInputValue(ev.target.value);
                }}
                ></textarea>
            </div>
        )
    }
}