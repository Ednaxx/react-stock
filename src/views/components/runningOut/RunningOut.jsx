import { Link } from "react-router-dom";

export default function RunningOut({ itemsList }) {
    return (
        <div className="bottom-card">
            <div className="bottom-card-header">
                <span className="list-item-name">Running Out</span>
                <span className="list-item-ammount">Amt.</span>
                <span className="list-item-action">Actions</span>
            </div>

            {itemsList.map(product => (
                <div className="list-item" key={product.id}>
                    <span className="list-item-name">{product.name}</span>
                    <span className="list-item-ammount">{product.amount}</span>
                    <span className="list-item-action"><button><Link to={`/stock-items/${product.id}`}>View</Link></button></span>
                </div>
            ))}
        </div>
    )
}