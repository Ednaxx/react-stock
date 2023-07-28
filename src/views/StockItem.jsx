import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./styles/stockItem.css";
import handleDeleteItem from "./eventHandlers/handleDeleteItem.js";

export default function StockItem() {
    const product = useLoaderData();
    const navigate = useNavigate();

    // Date formatting variables

    const updatedAt = new Date(product.updatedAt);
    const updatedAtDay = updatedAt.getDate();
    const updatedAtMonth = updatedAt.getMonth();

    const createdAt = new Date(product.createdAt);
    const createdAtDay = createdAt.getDate();
    const createdAtMonth = createdAt.getMonth();

    return (
        <div id="item-container">
            <div id="item-header">
                <h2>{product.name}</h2>
                <button id="update"><Link to={`/stock-items/${product.id}/editItem`}>Edit</Link></button>
                <button id="delete" onClick={() => {
                    const deleted = handleDeleteItem(product.id);
                    if (deleted) navigate("/stock-items");
                }}>Delete</button>
            </div>

            <div id="timestamps">
                <span>Created at: {`${(createdAtDay < 10) ? '0' + createdAtDay : createdAtDay}/${(createdAtMonth < 10) ? '0' + createdAtMonth : createdAtMonth}/${createdAt.getFullYear()}`}</span>
                <span>Updated at: {`${(updatedAtDay < 10) ? '0' + updatedAtDay : updatedAtDay}/${(updatedAtMonth < 10) ? '0' + updatedAtMonth : updatedAtMonth}/${updatedAt.getFullYear()}`}</span>
            </div>

            <div id="item-cards">
                <div id="category-card">Category: {product.category}</div>
                <div id="stock-card">In Stock: {product.amount}</div>
                <div id="price-card">Price: {Number(product.price).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</div>
            </div>
            
            <p id="description">{product.description}</p>
        </div>
    )
}