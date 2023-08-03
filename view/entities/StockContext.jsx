import { createContext, useEffect, useState } from "react";
import Item from "./Item.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const StockContext = createContext({});

export function StockContextProvider({ children }) {
    const [stockItems, setStockItems] = useState([]);
    const [operationError, setOperationError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let response = {}
            
            try {
                response = await fetch("http://localhost:5000/items");
            }
            catch (error) {
                console.log(error)
                response.ok = false;
                response.status = 500;
            }

            if (!response.ok) {
                setStockItems(false);
                setOperationError(response);
                return
            }

            const storedItems = await response.json();

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
        const response = await fetch("http://localhost:5000/items", { method: "POST", body: JSON.stringify(item), headers: { "Content-Type": "application/json" } });

        if (!response.ok) {
            setStockItems(false);
            setOperationError(response);
            return
        }

        const _id = await response.json();

        setStockItems(currentItems => [...currentItems, { ...item, id: _id }]);
    }


    const getItem = (itemId) => {
        return stockItems.find(item => item.id === itemId);
    }


    const deleteItem = async (itemId) => {
        const response = await fetch(`http://localhost:5000/items/${itemId}`, { method: "DELETE" });

        if (!response.ok) {
            setStockItems(false);
            setOperationError(response);
            return
        }

        setStockItems(current => current.filter(item => item.id !== itemId));
    }

    const updateItem = async (itemId, item) => {
        const updatedItem = { ...item, updatedAt: new Date() };

        const response = await fetch(`http://localhost:5000/items/${itemId}`, { method: "PUT", body: JSON.stringify(updatedItem), headers: { "Content-Type": "application/json" } });

        if (!response.ok) {
            setStockItems(false);
            setOperationError(response);
            return
        }

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



    if (!stockItems) return <ErrorPage error={operationError} />

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )

}