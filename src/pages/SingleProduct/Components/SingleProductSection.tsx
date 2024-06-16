import { Link, useLocation } from "react-router-dom"
import { ProductType } from "../../../types/ProductType"
import { useState } from "react"

const SingleProductSection = () => {
  const location = useLocation()
  const { product }: { product: ProductType } = location.state || {}

  const [quantity, setQuantity] = useState(1)

  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating % 1 !== 0

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  const renderStars = () => {
    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={i}
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/StarIcon.svg"
          alt="Full Star"
          className="w-5 h-5"
        />
      )
    }
    if (hasHalfStar) {
      stars.push(
        <img
          key="half"
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/HalfStarIcon.svg"
          alt="Half Star"
          className="w-5 h-5"
        />
      )
    }
    return stars
  }

  return (
    <section
      className="flex flex-col h-fit py-9 font-poppins border-b border-[#D9D9D9]
    lg:px-9 lg:flex-row xl:px-[6.25rem] "
    >
      <div
        className="flex flex-col items-center gap-y-3 gap-x-8 px-4 lg:pr-12
      lg:items-start lg:px-0 xl:pr-24 lg:flex-row justify-center"
      >
        <div className="hidden lg:flex">
          <div className="w-20 h-20 rounded-xl bg-LighterBeige p-3">
            <img
              src={product.imageUrl}
              alt="Product Image Smaller"
              className="w-fit rounded-xl"
            />
          </div>
        </div>
        <div
          className="flex w-fit sm:w-[26.5rem] lg:h-[31.25rem] items-center bg-LighterBeige p-4 
          rounded-xl"
        >
          <img
            src={product.imageUrl}
            alt="Product Image"
            className="rounded-xl w-full"
          />
        </div>
        <div className="flex gap-x-2 lg:hidden">
          <div className="w-20 h-20 rounded-xl bg-LighterBeige p-3">
            <img
              src={product.imageUrl}
              alt="Product Image Smaller"
              className="w-fit rounded-xl"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full flex flex-col px-4 pt-8 items-center 
      lg:px-0 lg:pt-0 lg:justify-center lg:items-start"
      >
        <p className="text-[2.625rem]">{product.name}</p>
        <p className="font-medium text-2xl text-FooterLightGray pb-[1.125rem]">
          Rs. {product.price.toLocaleString()}
        </p>
        <div className="flex sm:gap-x-5 items-center pb-4">
          <div className="flex gap-x-1">{renderStars()}</div>
          <div className="w-0.5 h-9 mx-4 bg-FooterLightGray"></div>
          <p className="text-sm text-FooterLightGray">5 Customer Review</p>
        </div>
        <p className="pb-5 text-sm break-words max-w-[28rem]">
          {product.description}
        </p>
        <div className="flex flex-col gap-y-1 pb-4">
          <p className="text-sm text-FooterLightGray">Size</p>
          <div className="flex gap-x-4">
            <button
              className="w-[1.875rem] h-[1.875rem] bg-LighterBeige text-sm rounded-md transition-colors
            hover:bg-Golden hover:text-white"
            >
              L
            </button>
            <button
              className="w-[1.875rem] h-[1.875rem] bg-LighterBeige text-sm rounded-md transition-colors
            hover:bg-Golden hover:text-white"
            >
              XL
            </button>
            <button
              className="w-[1.875rem] h-[1.875rem] bg-LighterBeige text-sm rounded-md transition-colors
            hover:bg-Golden hover:text-white"
            >
              XS
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 pb-8">
          <p className="text-sm text-FooterLightGray">Color</p>
          <div className="flex gap-x-4">
            <button
              className="w-[1.875rem] h-[1.875rem] bg-[#816DFA] text-sm rounded-full transition-all
            hover:brightness-75"
            ></button>
            <button
              className="w-[1.875rem] h-[1.875rem] bg-black text-sm rounded-full transition-all
            hover:brightness-75"
            ></button>
            <button
              className="w-[1.875rem] h-[1.875rem] bg-Golden text-sm rounded-full transition-all
            hover:brightness-75"
            ></button>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-8 border-b border-[#D9D9D9] pb-14">
          <div className="relative flex items-center justify-center px-14 py-5 w-[7.688rem] border border-FooterLightGray rounded-xl">
            <button className="absolute left-4" onClick={decreaseQuantity}>
              -
            </button>
            <span className="font-medium">{quantity}</span>
            <button className="absolute right-4" onClick={increaseQuantity}>
              +
            </button>
          </div>
          <button
            className="px-12 py-4 text-xl border border-black rounded-2xl bg-white transition-all
          hover:brightness-90 hover:shadow-lg"
          >
            Add To Cart
          </button>
        </div>
        <div className="flex pt-10 gap-x-4 text-FooterLightGray text-sm sm:text-base">
          <div className="flex flex-col w-fit gap-y-3">
            <p>SKU</p>
            <p>Category</p>
            <p>Tags</p>
            <p>Share</p>
          </div>
          <div className="flex flex-col gap-y-3 font-medium">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="flex flex-col gap-y-3 ">
            <p>SS001</p>
            <p>Sofas</p>
            <p>Sofa, Chair, Home, Shop</p>
            <div className="flex gap-x-6">
              <Link to="https://www.facebook.com/" target="_blank">
                <img
                  src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/FacebookIconFill.svg"
                  alt="Facebook Icon"
                />
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <img
                  src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LinkedinIconFill.svg"
                  alt="Linkedin Icon"
                />
              </Link>
              <Link to="https://x.com/" target="_blank">
                <img
                  src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/TwitterIconFill.svg"
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProductSection
