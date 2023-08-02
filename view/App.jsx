import { RouterProvider } from "react-router-dom"
import router from "./router"
import { StockContextProvider } from "./entities/StockContext"

export default function App() {

  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  )
}
