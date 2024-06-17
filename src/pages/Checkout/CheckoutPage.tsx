import PagesTitles from "../../components/PagesTitles"
import Services from "../../components/Services"
import CheckoutSection from "./components/CheckoutSection"

const CheckoutPage = () => {
  return (
    <>
      <PagesTitles currentPage="Checkout" />
      <CheckoutSection />
      <Services />
    </>
  )
}

export default CheckoutPage
