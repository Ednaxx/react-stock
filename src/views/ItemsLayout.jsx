import { Link, Outlet } from "react-router-dom";
import "./styles/itemsLayout.css";

export default function ItemsLayout() {
    return (
        <div id="items-layout">
            <h1 id="page-title">Stock Items</h1>
            <nav>
                <Link to={"/stock-items"}>All items</Link>
                <Link to={"/stock-items/newItem"}>New item</Link>
            </nav>
            <Outlet />
        </div>
    )
}