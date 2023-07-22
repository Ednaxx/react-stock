import { Link, useLoaderData } from "react-router-dom";
import "./styles/stockItems.css";

export default function StockItems() {
    const products = useLoaderData();

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
                            <button id="items-list-view"><Link to={`stock-items/${product.id}`}>View</Link></button>
                            <button id="items-list-edit"><Link to={`stock-items/${product.id}/editItem`}>Edit</Link></button>
                            <button id="items-list-delete">Delete</button>
                        </span>
                    </div>
                )
            })}

        </div>
    )
}