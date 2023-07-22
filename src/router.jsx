import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/RootLayout";
import Home from "./views/Home";
import StockItems from "./views/StockItems";
import StockItem from "./views/StockItem";
import EditItem from "./views/EditItem";
import ItemsLayout from "./views/ItemsLayout";
import productsLoader from "./loaders/products";
import productLoader from "./loaders/product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: productsLoader
            },
            {
                element: <ItemsLayout />,
                children: [
                    {
                        path: "stock-items",
                        element: <StockItems />,
                        loader: productsLoader
                    },
                    {
                        path: "stock-items/:itemId",
                        element: <StockItem />,
                        loader: productLoader
                    },
                    {
                        path: "stock-items/:itemId/editItem",
                        element: <EditItem />,
                        loader: productLoader
                    },
                    {
                        path: "stock-items/newItem",
                        element: <EditItem />
                    }
                ]
            }
        ]
    }
]);

export default router;