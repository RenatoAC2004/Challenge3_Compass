import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    )
}