import { Link, Outlet } from "react-router-dom";
import "./styles/itemsLayout.css";
import { useState } from "react";

export default function ItemsLayout() {
    const [ selectedTab, setSelectedTab ] = useState(null);
    
    return (
        <div id="items-layout">
            <h1 id="page-title">Stock Items</h1>
            <nav>
                <Link to={"/stock-items"} className={(selectedTab == "all") ? "selected-tab" : null}>All items</Link>
                <Link to={"/stock-items/newItem"} className={(selectedTab == "new") ? "selected-tab" : null}>New item</Link>
            </nav>
            <Outlet context={[setSelectedTab]}/>
        </div>
    )
}