import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import SingleProductPage from "../pages/SingleProduct/SingleProductPage";
import Shop from "../pages/Shop/Shop";
import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ProtectedRoutes from "./protectedRoutes";
import ContactPage from "../pages/Contact/ContactPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:productId" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/checkout" element={<ProtectedRoutes element={<CheckoutPage />} />} />
    </Routes>
  );
};
