import { Link } from "react-router-dom";
import "./styles/stockItems.css";
import { useContext } from "react";
import { StockContext } from "../entities/StockContext";

export default function StockItems() {
    const { stockItems, deleteItem } = useContext(StockContext);

    return (
        <div id="items-main-container">
            <div id="items-header">
                <span className="items-list-id">ID</span>
                <span className="items-list-name">Name</span>
                <span className="items-list-inStock">In Stock</span>
                <span className="items-list-category">Category</span>
                <span className="items-list-actions">Actions</span>
            </div>

            {stockItems.map(item => {
                return (
                    <div className="list-item" key={item.id}>
                        <span className="items-list-id">{item.id}</span>
                        <span className="items-list-name">{item.name}</span>
                        <span className="items-list-inStock">{item.amount}</span>
                        <span className="items-list-category">{item.category}</span>
                        <span className="items-list-actions">
                            <button id="items-list-view"><Link to={`/stock-items/${item.id}`}>View</Link></button>
                            <button id="items-list-edit"><Link to={`/stock-items/${item.id}/editItem`}>Edit</Link></button>
                            <button id="items-list-delete" onClick={() => {
                                if (confirm(`Do you wish to delete "${item.name}"? `)) deleteItem(item.id);
                            }}>
                                Delete
                            </button>
                        </span>
                    </div>
                )
            })}

        </div>
    )
}