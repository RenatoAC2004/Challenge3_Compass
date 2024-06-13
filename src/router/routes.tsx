import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"
import SingleProduct from "../pages/SingleProduct/SingleProduct"
import Shop from "../pages/Shop/Shop"


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/product/:productId" element={<SingleProduct />} />
        </Routes>
    )
}