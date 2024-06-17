import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { MainRoutes } from "./router/routes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <MainRoutes />
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
