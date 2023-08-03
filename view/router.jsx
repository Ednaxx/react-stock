import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import StockItems from "./pages/StockItems";
import StockItem from "./pages/StockItem";
import EditItem from "./pages/EditItem";
import ItemsLayout from "./pages/ItemsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
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