import { useState } from "react"
import FormInputs from "../../../components/FormInputs"
import "../Styles/RadioStyle.css"

const CheckoutSection = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('directBankTransfer')

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method)
  }
  return (
    <section className="h-fit font-poppins xl:px-[6.5rem] pt-16 pb-12">
      <form
        className="flex flex-col lg:flex-row items-center justify-center 
      lg:justify-between lg:items-start 2xl:justify-center"
      >
        <div className="px-4 pt-4 pb-8 md:max-w-[38rem] lg:p-20 lg:pt-9">
          <h1 className="font-semibold text-4xl pb-9 text-center lg:text-start">
            Billing details
          </h1>
          <div className="flex flex-col gap-y-9">
            <div className="flex gap-x-8">
              <FormInputs label="First Name" id="firstName" />
              <FormInputs label="Last Name" id="lastName" />
            </div>
            <FormInputs label="Company Name (Optional)" id="companyName" />
            <FormInputs label="ZIP code" id="zipCode" type="number" />
            <FormInputs label="Country / Region" id="countryRegion" />
            <FormInputs label="Street address" id="streetAdress" />
            <FormInputs label="Town / City" id="townCity" />
            <FormInputs label="Province" id="province" />
            <FormInputs label="Add-on address" id="addOnAdress" />
            <FormInputs label="Email address" id="email" type="email" />
            <FormInputs
              label=""
              id="Additional Information"
              placeholder="Additional Information"
            />
          </div>
        </div>

        <div className="p-4 lg:w-[33.313rem] lg:px-9 lg:py-20">
          <div
            className="flex justify-between py-10 border-y border-[#D9D9D9] 
          lg:border-t-0 lg:p-0"
          >
            <div className="flex flex-col">
              <h1 className="font-medium text-2xl pb-3">Product</h1>
              <div className="flex flex-col gap-y-5">
                <p className="flex text-FooterLightGray items-center gap-x-3">
                  Placeholder <span className="font-medium text-xs">X 1</span>
                </p>
                <p>Subtotal</p>
                <p>Total</p>
              </div>
            </div>

            <div className="flex flex-col text-right">
              <h1 className="font-medium text-2xl pb-3">Subtotal</h1>
              <div className="flex flex-col gap-y-5 font-light">
                <p>Rs. 250,000.00</p>
                <p>Rs. 250,000.00</p>
                <p className="font-bold text-xl text-Golden">Rs. 250,000.00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 pt-5">
            <div className="radio-input flex items-center gap-x-4">
              <input
                type="radio"
                id="radio1"
                name="paymentMethod"
                checked={selectedPaymentMethod === "directBankTransfer"}
                onChange={() => handlePaymentMethodChange("directBankTransfer")}
              />
              <label htmlFor="radio1" className="cursor-pointer">Direct Bank Transfer</label>
            </div>
            {selectedPaymentMethod === "directBankTransfer" && (
              <p className="font-light text-FooterLightGray">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
            <div className="radio-input flex items-center gap-x-4">
              <input
                type="radio"
                id="radio2"
                name="paymentMethod"
                checked={selectedPaymentMethod === "directBankTransfer2"}
                onChange={() =>
                  handlePaymentMethodChange("directBankTransfer2")
                }
              />
              <label htmlFor="radio2" className="cursor-pointer">Direct Bank Transfer</label>
            </div>
            {selectedPaymentMethod === "directBankTransfer2" && (
              <p className="font-light text-FooterLightGray">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
            <div className="radio-input flex items-center gap-x-4">
              <input
                type="radio"
                id="radio3"
                name="paymentMethod"
                checked={selectedPaymentMethod === "cashOnDelivery"}
                onChange={() => handlePaymentMethodChange("cashOnDelivery")}
              />
              <label htmlFor="radio3" className="cursor-pointer">Cash On Delivery</label>
            </div>
            {selectedPaymentMethod === "cashOnDelivery" && (
                <p className="font-light text-FooterLightGray">
                  Make your payment in cash.
                </p>
              )}
          </div>
          <p className="font-light text-justify pt-5">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <span className="font-semibold"> privacy policy.</span>
          </p>
          <div className="flex w-full justify-center pt-10">
            <button
              className="py-4 px-[6.25rem] border border-black rounded-2xl bg-white text-nowrap
            hover:shadow-md hover:brightness-95"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default CheckoutSection
