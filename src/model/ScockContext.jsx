import { createContext, useState } from "react";
import Item from "./Item.jsx";

const StockContext = createContext({});

export default function StockContextProvider({ children }) {
    const [stockItems, setStockItems] = useState(() => {
        
        const storedItems = localStorage.getItem('obc-react-stock');
        if (!storedItems) return [];

        const items = JSON.parse(storedItems);
        items.forEach(item => {
            item = new Item({ ...item, createdAt: new Date(item.createdAt), updatedAt: new Date(item.updatedAt) });
        });

        return items
    });

    const addItem = (item) => {
        item.validade();
        setStockItems(currentItems => {
            const updatedItems = [...currentItems, item];
            localStorage.setItem("stock", JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    const getItem = (itemId) => {
        return stockItems.find(item => item.id === +itemId);
    }

    const deleteItem = (itemId) => {
        setStockItems(current => {
            const updatedItems = current.filter(item => item.id !== +itemId);
            localStorage.setItem("stock", JSON.stringify(updatedItems));
            return updatedItems
        });
    }

    const updateItem = (itemId, updatedItem) => {
        setStockItems(current => {
            const itemIndex = current.findIndex(i => i.id === itemId);
            const updatedItems = [...current];
            Object.assign(updatedItems[itemIndex], updatedItem, { updatedAt: new Date() });
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems));
            return updatedItems
        })
    }

    const stock = {
        stockItems,
        addItem,
        getItem,
        updateItem,
        deleteItem
    }

    return (
        <StockContext.Provider stock={stock}>
            {children}
        </StockContext.Provider>
    )

}