import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"
import SingleProduct from "../pages/SingleProduct/SingleProduct"


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/product/:productId" element={<SingleProduct />} />
        </Routes>
    )
}