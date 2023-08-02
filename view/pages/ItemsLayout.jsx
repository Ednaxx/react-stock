import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles/itemsLayout.css";

export default function ItemsLayout() {
    const { pathname } = useLocation();
    
    return (
        <div id="items-layout">
            <h1 id="page-title">Stock Items</h1>
            <nav>
                <Link to={"/stock-items"} className={pathname === "/stock-items" ? "selected-tab" : ""}>All items</Link>
                <Link to={"/stock-items/newItem"} className={pathname === "/stock-items/newItem" ? "selected-tab" : ""}>New item</Link>
            </nav>
            <Outlet />
        </div>
    )
}