import { Link, useParams, useNavigate } from "react-router-dom";
import "./styles/stockItem.css";
import { StockContext } from "../model/StockContext";
import { useContext } from "react";

export default function StockItem() {
    const { deleteItem, getItem } = useContext(StockContext);
    const navigate = useNavigate();
    const { itemId } = useParams();

    const item = getItem(itemId);

    return (
        <div id="item-container">
            <div id="item-header">
                <h2>{item.name}</h2>
                <button id="update"><Link to={`/stock-items/${item.id}/editItem`}>Edit</Link></button>
                <button id="delete" onClick={() => {
                    if (!confirm(`Do you wish to delete "${item.name}"? `)) return;
                    navigate("/stock-items");
                    deleteItem(item.id);
                }}>
                    Delete
                </button>
            </div>

            <div id="timestamps">
                <span>Created at: {`${item.createdAt.getDate()}/${item.createdAt.getMonth() + 1}/${item.createdAt.getFullYear()}`}</span>
                <span>Updated at: {`${item.updatedAt.getDate()}/${item.updatedAt.getMonth() + 1}/${item.updatedAt.getFullYear()}`}</span>
            </div>

            <div id="item-cards">
                <div id="category-card">Category: {item.category}</div>
                <div id="stock-card">In Stock: {item.amount}</div>
                <div id="price-card">Price: {Number(item.price).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</div>
            </div>

            <p id="description">{item.description}</p>
        </div>
    )
}