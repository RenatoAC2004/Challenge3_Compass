import React from "react"
import { ProductType } from "../types/ProductType"

interface CartOverlayProps {
  items: ProductType[]
  onClose: () => void
}

const CartOverlay: React.FC<CartOverlayProps> = ({ items, onClose }) => {
  console.log(items)
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-20 flex justify-end z-50 font-poppins">
      <div className="bg-white w-[26rem] relative h-full overflow-y-auto">
        <div className="border-b px-7 pt-7">
          <button
            className="absolute top-3 right-3 bg-none border-none text-2xl cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="font-semibold text-2xl pb-6 border-b border-[#D9D9D9] mb-10">
            Shopping Cart
          </h2>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {items.map(item => (
                  <li key={item.id} className="flex pb-5 gap-x-8">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-28 h-28 rounded-xl"
                    />
                    <div className="w-full flex justify-between items-center">
                      <div className="flex flex-col gap-y-2 sm:pr-16">
                        <p>{item.name}</p>
                        <p className="flex font-light gap-x-4 items-center">
                          1<span className="text-xs">X</span>
                          <span className="text-Golden font-medium text-xs">
                            Rp {item.price.toLocaleString()}
                          </span>
                        </p>
                      </div>
                      <button>
                        <img
                          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/RemoveIcon.svg"
                          alt="Remove Icon"
                          className="transition-all hover:brightness-75"
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex gap-x-[6.25rem] pb-6">
                <p>Subtotal</p>{" "}
                <span className="text-Golden font-semibold">
                  Rs. 520,000.00
                </span>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-between p-6 text-xs">
          <button className="px-7 py-1.5 border border-black rounded-full">Cart</button>
          <button className="px-7 py-1.5 border border-black rounded-full">Checkout</button>
          <button className="px-7 py-1.5 border border-black rounded-full">Comparison</button>
        </div>
      </div>
    </div>
  )
}

export default CartOverlay
