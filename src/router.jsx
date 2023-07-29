import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/RootLayout";
import Home from "./views/Home";
import StockItems from "./views/StockItems";
import StockItem from "./views/StockItem";
import EditItem from "./views/EditItem";
import ItemsLayout from "./views/ItemsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                element: <ItemsLayout />,
                children: [
                    {
                        path: "stock-items",
                        element: <StockItems />
                    },
                    {
                        path: "stock-items/:itemId",
                        element: <StockItem />
                    },
                    {
                        path: "stock-items/:itemId/editItem",
                        element: <EditItem />
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