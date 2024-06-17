import PagesTitles from "../../components/PagesTitles"
import Services from "../../components/Services"
import CartSection from "./Components/CartSection"

const CartPage = () => {
  return (
    <>
      <PagesTitles currentPage="Cart" />
      <CartSection />
      <Services />
    </>
  )
}

export default CartPage
