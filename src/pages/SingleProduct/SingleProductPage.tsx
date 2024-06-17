import DescriptionSection from "./Components/DescriptionSection"
import LinksBar from "./Components/LinksBar"
import RelatedProductsSection from "./Components/RelatedProductsSection"
import SingleProductSection from "./Components/SingleProductSection"

const SingleProductPage = () => {
  return (
    <>
      <LinksBar />
      <SingleProductSection />
      <DescriptionSection />
      <RelatedProductsSection />
    </>
  )
}

export default SingleProductPage
