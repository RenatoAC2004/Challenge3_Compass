import React from "react"
import { CartItem } from "../store/cart/reducer"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../store/cart/actions"
import { AppDispatch } from "../store"
import { Link } from "react-router-dom"

interface CartOverlayProps {
  items: CartItem[]
  onClose: () => void
}

const CartOverlay: React.FC<CartOverlayProps> = ({ items, onClose }) => {
  const dispatch = useDispatch<AppDispatch>()
  const subtotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const handleRemove = (item: CartItem) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-20 flex justify-end z-50 font-poppins">
      <div className="bg-white w-[26rem] relative h-full overflow-y-auto">
        <div className="border-b px-7 pt-7">
          <div className="flex justify-between pb-6 border-b border-[#D9D9D9] mb-10">
            <h2 className="font-semibold text-2xl">Shopping Cart</h2>
            <button
              className="bg-none border-none text-2xl cursor-pointer"
              onClick={onClose}
            >
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/CloseCartIcon.svg"
                alt=""
              />
            </button>
          </div>
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
                          {item.quantity}
                          <span className="text-xs">X</span>
                          <span className="text-Golden font-medium text-xs">
                            Rp {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </p>
                      </div>
                      <button>
                        <img
                          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/RemoveIcon.svg"
                          alt="Remove Icon"
                          className="transition-all hover:brightness-75"
                          onClick={() => handleRemove(item)}
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex gap-x-[6.25rem] pb-6 items-center">
                <p>Subtotal</p>
                <span className="text-Golden font-semibold">
                  Rp {subtotal.toLocaleString()}
                </span>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-between p-6 text-xs">
          <Link
            to={"/cart"}
            className="px-7 py-1.5 border border-black rounded-full transition-all 
          hover:bg-black hover:text-white"
          >
            Cart
          </Link>
          <Link
            to={"/checkout"}
            className="px-7 py-1.5 border border-black rounded-full transition-all 
          hover:bg-black hover:text-white"
          >
            Checkout
          </Link>
          <button
            className="px-7 py-1.5 border border-black rounded-full transition-all 
          hover:bg-black hover:text-white"
          >
            Comparison
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartOverlay
