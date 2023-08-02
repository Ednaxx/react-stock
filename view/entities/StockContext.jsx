import { createContext, useEffect, useState } from "react";
import Item from "./Item.jsx";

export const StockContext = createContext({});

export function StockContextProvider({ children }) {
    const [stockItems, setStockItems] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const storedItems = await fetch("http://localhost:5000/items")
                .then(data => (data.json()));

            const items = storedItems
                .map(item => {
                    const itemObj = new Item({ ...item, createdAt: new Date(item.createdAt), updatedAt: new Date(item.updatedAt) })
                    itemObj.id = item._id

                    return itemObj
                });
            
            setStockItems(items);
        }
        fetchData();
    }, []);


    const addItem = async (item) => {
        item.validate();
        const _id = await fetch("http://localhost:5000/items", {method: "POST", body: JSON.stringify(item), headers: {"Content-Type": "application/json"}})
            .then(response => response.json());

        setStockItems(currentItems => [...currentItems, {...item, id: _id}]);
    }


    const getItem = (itemId) => {
        return stockItems.find(item => item.id === itemId);
    }

    // update DELETE AND UPDATE

    const deleteItem = async (itemId) => {
        await fetch(`http://localhost:5000/items/${itemId}`, {method: "DELETE"});

        setStockItems(current => current.filter(item => item.id !== itemId));
    }

    const updateItem = async (itemId, item) => {
        const updatedItem = {...item, updatedAt: new Date()};

        await fetch(`http://localhost:5000/items/${itemId}`, { method: "PUT", body: JSON.stringify(updatedItem), headers: {"Content-Type": "application/json"} });

        setStockItems(current => {
            const itemIndex = current.findIndex(i => i.id === itemId);
            const updatedItems = [...current];
            Object.assign(updatedItems[itemIndex], updatedItem);

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
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )

}