import { Link } from "react-router-dom";

export default function RecentItems({ recentItems }) {
    return (
        <div className="bottom-card">
            <div className="bottom-card-header">
                <span className="list-item-name">Recent Items</span>
                <span className="list-item-action">Actions</span>
            </div>
            {recentItems.map(product => (
                <div className="list-item" key={product.id}>
                    <span className="list-item-name">{product.name}</span>
                    <span className="list-item-action"><button><Link to={`/stock-items/${product.id}`}>View</Link></button></span>
                </div>
            ))}
        </div>
    )
}