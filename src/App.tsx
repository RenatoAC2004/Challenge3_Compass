import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { MainRoutes } from "./router/routes"

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App
