import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootReducer } from "../../../store"
import {
  updateCartItemQuantity,
  removeFromCart,
  removeAllFromCart,
} from "../../../store/cart/actions"
import { CartItem } from "../../../store/cart/reducer"
import { Link } from "react-router-dom"

const CartSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootReducer) => state.cart.items)
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) {
      newQuantity = 1
    }
    dispatch(updateCartItemQuantity(item.id, newQuantity))
  }

  const handleRemove = (item: CartItem) => {
    dispatch(removeFromCart(item))
  }

  const handleRemoveAll = (item: CartItem) => {
    dispatch(removeAllFromCart(item))
  }

  return (
    <section className="h-fit pb-[4.875rem] px-4 font-poppins md:py-[4.875rem] xl:px-[6.25rem]">
      <div className="flex flex-col lg:flex-row gap-x-7">
        <table className="hidden md:table w-full h-fit">
          <thead className="bg-LighterBeige h-14">
            <tr>
              <th className="w-[9.688rem]"></th>
              <th className="text-left font-medium">Product</th>
              <th className="font-medium">Price</th>
              <th className="font-medium">Quantity</th>
              <th className="text-left font-medium">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-14"></tr>
            {items.map(item => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-[6.563rem] h-[6.563rem] rounded-xl mb-2"
                  />
                </td>
                <td>
                  <span className="text-FooterLightGray">{item.name}</span>
                </td>
                <td className="text-FooterLightGray text-center">
                  Rp {item.price.toLocaleString()}
                </td>
                <td>
                  <div className="flex justify-center">
                    <div className="relative w-fit flex items-center justify-center px-[3.125rem] py-3 border border-FooterLightGray rounded-xl">
                      <button
                        className="absolute left-4"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="absolute right-4"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div>Rp {(item.price * item.quantity).toLocaleString()} </div>
                </td>
                <td>
                  <button onClick={() => handleRemoveAll(item)}>
                    <img
                      src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/TrashIcon.svg"
                      alt="Trash Icon"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col justify-center md:hidden h-fit">
          <div className="flex flex-col gap-y-2 py-8 items-center">
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/CartIcon.svg"
              alt="CartIcon"
              className="w-fit"
            />
            <h1 className="text-4xl font-medium">Your Cart</h1>
          </div>
          <div className="flex flex-col flex-wrap w-full items-center">
            {items.map(item => (
              <li
                key={item.id}
                className="flex flex-col border p-3 rounded-2xl gap-y-2 mb-4 w-fit sm:min-w-80"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-28 h-28 rounded-xl"
                  />
                  <div className="w-full flex items-center">
                    <div className="flex flex-col flex-wrap gap-y-2">
                      <p className="flex flex-wrap gap-x-2">
                        <span className="font-semibold">Product:</span>
                        <span className="text-FooterLightGray">
                          {item.name}
                        </span>
                      </p>
                      <div className="flex items-center gap-x-2">
                        <p className="font-semibold hidden sm:block">
                          Quantity:
                        </p>
                        <div className="relative w-fit flex items-center justify-center px-[3.125rem] py-3 border border-FooterLightGray rounded-xl">
                          <button
                            className="absolute left-4"
                            onClick={() =>
                              handleQuantityChange(item, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            className="absolute right-4"
                            onClick={() =>
                              handleQuantityChange(item, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <p className="font-semibold">Price:</p>
                  <p className="text-FooterLightGray">
                    Rp {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p className="font-semibold">Subtotal:</p>
                  <p className="text-FooterLightGray">
                    Rp {(item.price * item.quantity).toLocaleString()}{" "}
                  </p>
                </div>
                <button
                  className="flex gap-x-2 w-fit self-center p-2 border rounded-xl shadow-md transition-colors sm:self-auto
                hover:border-black"
                  onClick={() => handleRemove(item)}
                >
                  Remove Product{" "}
                  <img
                    src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/TrashIcon.svg"
                    alt="Trash Icon"
                  />
                </button>
              </li>
            ))}
          </div>
        </div>

        <div className="flex pt-14 lg:pt-0 justify-center">
          <div
            className="flex flex-col max-w-96 w-full h-fit px-4 py-4 bg-LighterBeige items-center 
           lg:min-h-[25rem] lg:px-10 lg:w-fit xl:w-[25rem] xl:px-[4.688rem]"
          >
            <h1 className="text-3xl font-semibold text-center pb-16">
              Cart Totals
            </h1>
            <div className="flex py-4 w-full">
              <p
                className="w-full flex font-medium gap-x-12 justify-center 
                lg:gap-x-0 lg:justify-between"
              >
                Subtotal
                <span>
                  {items.map(item => (
                    <span key={item.id} className="flex flex-col pb-4 w-full">
                      <span className="text-[#9F9F9F]">
                        Rp. {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </span>
                  ))}
                </span>
              </p>
            </div>
            <div className="flex pt-4 pb-11 w-full">
              <p
                className="w-full flex font-medium 
              gap-x-12 justify-center 
              lg:gap-x-0 lg:justify-between"
              >
                Total
                <span className="text-Golden font-medium text-xl">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </p>
            </div>
            <Link
              to={"/checkout"}
              className="px-14 py-3 border border-black rounded-2xl text-xl w-fit 
            transition-colors hover:bg-black hover:text-white lg:text-nowrap"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartSection
