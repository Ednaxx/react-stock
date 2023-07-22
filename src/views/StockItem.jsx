import { Link, useLoaderData } from "react-router-dom";
import "./styles/stockItem.css";

export default function StockItem() {
    const product = useLoaderData();

    return (
        <div id="item-container">
            <div id="item-header">
                <h2>{product.name}</h2>
                <button id="update"><Link to={`stock-items/${product.id}/editItem`}>Edit</Link></button>
                <button id="delete">Delete</button>
            </div>
            <div id="timestamps">
                <span>Created at: {product.createdAt}</span>
                <span>Updated at: {product.updatedAt}</span>
            </div>
            <div id="item-cards">
                <div id="category-card">Category: {product.category}</div>
                <div id="stock-card">In Stock: {product.inStock}</div>
                <div id="price-card">Price: {Number(product.price).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</div>
            </div>
            <p id="description">{product.description}</p>
        </div>
    )
}