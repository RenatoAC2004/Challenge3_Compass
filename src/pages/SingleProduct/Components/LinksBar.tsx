import { useLocation, Link } from "react-router-dom"
import { ProductType } from "../../../types/ProductType"

const LinksBar = () => {
  const location = useLocation()
  const { product }: { product: ProductType } = location.state || {}

  return (
    <section className="pt-[6.25rem] h-fit">
      <div
        className="flex h-[6.25rem] bg-LighterBeige justify-center md:px-[6.25rem] items-center sm:justify-normal 
    font-poppins"
      >
        <p className="flex gap-x-6">
          <Link to="/" className="text-FooterLightGray hover:underline">
            Home
          </Link>
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/ArrowIcon.svg"
            alt=""
          />
          <Link to="/shop" className="text-FooterLightGray hover:underline">
            Shop
          </Link>
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/ArrowIcon.svg"
            alt=""
          />
        </p>
        <div className="w-0.5 h-9 mx-8 bg-FooterLightGray"></div>
        <p>{product.name}</p>
      </div>
    </section>
  )
}

export default LinksBar
