import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"
import SingleProductPage from "../pages/SingleProduct/SingleProductPage"
import Shop from "../pages/Shop/Shop"
import CartPage from "../pages/Cart/CartPage"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:productId" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}
