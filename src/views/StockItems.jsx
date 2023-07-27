import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import "./styles/stockItems.css";
import { useEffect, useState } from "react";
import handleDeleteItem from "../eventHandlers/handleDeleteItem";

export default function StockItems() {
    const [ products, setProducts ] = useState(useLoaderData());
    const [setSelectedTab] = useOutletContext();
    
    useEffect(() => {
        setSelectedTab("all");
    })

    return (
        <div id="items-main-container">
            <div id="items-header">
                <span className="items-list-id">ID</span>
                <span className="items-list-name">Name</span>
                <span className="items-list-inStock">In Stock</span>
                <span className="items-list-category">Category</span>
                <span className="items-list-actions">Actions</span>
            </div>

            {products.map(product => {
                return (
                    <div className="list-item" key={product.id}>
                        <span className="items-list-id">{product.id}</span>
                        <span className="items-list-name">{product.name}</span>
                        <span className="items-list-inStock">{product.amount}</span>
                        <span className="items-list-category">{product.category}</span>
                        <span className="items-list-actions">
                            <button id="items-list-view"><Link to={`/stock-items/${product.id}`}>View</Link></button>
                            <button id="items-list-edit"><Link to={`/stock-items/${product.id}/editItem`}>Edit</Link></button>
                            <button id="items-list-delete" onClick={() => handleDeleteItem(product.id, products, setProducts)}>Delete</button>
                        </span>
                    </div>
                )
            })}

        </div>
    )
}