import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootReducer } from "../../../store"
import { fetchAddress } from "../../../store/address/actions"
import { saveFormData } from "../../../store/checkoutForm/actions"
import { FormErrors, validateForm } from "../../../utils/validateCheckoutForm"
import FormInputs from "../../../components/FormInputs"
import "../Styles/RadioStyle.css"
import ConfirmationModal from "../../../components/ConfirmationModal"

const CheckoutSection = () => {
  const dispatch = useDispatch<AppDispatch>()
  const address = useSelector((state: RootReducer) => state.address.address)
  const cartItems = useSelector((state: RootReducer) => state.cart.items)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [zipCodeValue, setZipCodeValue] = useState("")
  const [formattedZipCode, setFormattedZipCode] = useState("")
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("directBankTransfer")

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    countryRegion: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    addOnAddress: "",
    additionalInformation: "",
  }

  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState<FormErrors>({
    ...initialFormData,
  })

  // Função de formatação de CEP
  const formatZipCode = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "")
    let formattedValue = cleanedValue
    if (cleanedValue.length > 5) {
      formattedValue = `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(5)}`
    }
    setFormattedZipCode(formattedValue)
    setZipCodeValue(cleanedValue)
  }

  useEffect(() => {
    if (zipCodeValue.length === 8) {
      dispatch(fetchAddress(zipCodeValue))
    }
  }, [zipCodeValue, dispatch])

  useEffect(() => {
    if (address) {
      setFormData(prevData => ({
        ...prevData,
        countryRegion: address.uf,
        streetAddress: address.logradouro,
        townCity: address.localidade,
        province: address.uf,
        zipCode: zipCodeValue,
      }))
    }
  }, [address, zipCodeValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    if (id === "zipCode") {
      formatZipCode(value) // Chama a função de formatação
    } else {
      setFormData(prevData => ({
        ...prevData,
        [id]: value,
      }))
    }
  }

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm(formData)
    setFormErrors(errors)

    if (Object.values(errors).every(error => !error)) {
      dispatch(
        saveFormData({ ...formData, paymentMethod: selectedPaymentMethod })
      )
      setShowConfirmationModal(true)
    }
  }

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toLocaleString()
  }

  const handleModalClose = () => {
    setShowConfirmationModal(false)
  }

  return (
    <section className="h-fit font-poppins xl:px-[6.5rem] pt-16 pb-12">
      <form className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:items-start 2xl:justify-center">
        <div className="px-4 pt-4 pb-8 md:max-w-[38rem] lg:p-20 lg:pt-9">
          <h1 className="font-semibold text-4xl pb-9 text-center lg:text-start">
            Billing details
          </h1>
          <div className="flex flex-col gap-y-9">
            <div className="flex gap-x-8">
              <FormInputs
                label="First Name"
                id="firstName"
                onChange={handleInputChange}
                error={formErrors.firstName}
              />
              <FormInputs
                label="Last Name"
                id="lastName"
                onChange={handleInputChange}
                error={formErrors.lastName}
              />
            </div>
            <FormInputs
              label="Company Name (Optional)"
              id="companyName"
              onChange={handleInputChange}
            />
            <FormInputs
              label="ZIP code"
              id="zipCode"
              type="text"
              value={formattedZipCode}
              onChange={handleInputChange}
              error={formErrors.zipCode}
            />
            <FormInputs
              label="Country / Region"
              id="countryRegion"
              value={formData.countryRegion}
              onChange={handleInputChange}
              error={formErrors.countryRegion}
            />
            <FormInputs
              label="Street address"
              id="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              error={formErrors.streetAddress}
            />
            <FormInputs
              label="Town / City"
              id="townCity"
              value={formData.townCity}
              onChange={handleInputChange}
              error={formErrors.townCity}
            />
            <FormInputs
              label="Province"
              id="province"
              value={formData.province}
              onChange={handleInputChange}
              error={formErrors.province}
            />
            <FormInputs
              label="Add-on address"
              id="addOnAddress"
              onChange={handleInputChange}
              error={formErrors.addOnAddress}
            />
            <FormInputs
              label="Email address"
              id="email"
              type="email"
              onChange={handleInputChange}
              error={formErrors.email}
            />
            <FormInputs
              label=""
              id="additionalInformation"
              placeholder="Additional Information"
              onChange={handleInputChange}
              error={formErrors.additionalInformation}
            />
          </div>
        </div>

        <div className="sm:p-4 lg:w-[33.313rem] lg:px-9 lg:py-20">
          <div className="flex justify-between py-10 border-y border-[#D9D9D9] px-4 sm:px-0 lg:border-t-0 lg:p-0">
            <div className="flex flex-col">
              <h1 className="font-medium text-2xl pb-3">Product</h1>
              <div className="flex flex-col gap-y-5">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <p className="text-FooterLightGray">
                      {item.name}{" "}
                      <span className="text-black font-medium text-xs">
                        X {item.quantity}
                      </span>
                    </p>
                  </div>
                ))}
                <p>Total</p>
              </div>
            </div>

            <div className="flex flex-col text-right">
              <h1 className="font-medium text-2xl pb-3">Subtotal</h1>
              <div className="flex flex-col gap-y-5">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-y-5 font-light"
                  >
                    <p>Rs. {item.price}</p>
                  </div>
                ))}
                <p className="font-bold text-xl text-Golden">
                  Rs. {calculateTotal()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 pt-5 px-4 sm:px-0">
            <div className="radio-input flex items-center gap-x-4">
              <input
                type="radio"
                id="radio1"
                name="paymentMethod"
                checked={selectedPaymentMethod === "directBankTransfer"}
                onChange={() => handlePaymentMethodChange("directBankTransfer")}
              />
              <label htmlFor="radio1" className="cursor-pointer">
                Direct Bank Transfer
              </label>
            </div>
            {selectedPaymentMethod === "directBankTransfer" && (
              <p className="font-light text-FooterLightGray text-justify">
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
              <label htmlFor="radio2" className="cursor-pointer">
                Direct Bank Transfer 2
              </label>
            </div>
            {selectedPaymentMethod === "directBankTransfer2" && (
              <p className="font-light text-FooterLightGray text-justify">
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
              <label htmlFor="radio3" className="cursor-pointer">
                Cash On Delivery
              </label>
            </div>
            {selectedPaymentMethod === "cashOnDelivery" && (
              <p className="font-light text-FooterLightGray">
                Make your payment in cash.
              </p>
            )}
          </div>
          <p className="font-light text-justify pt-5 px-4 sm:px-0">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
          <div className="flex w-full justify-center pt-10">
            <button
              className="py-4 px-[6.25rem] border border-black rounded-2xl bg-white text-nowrap 
            transition-colors hover:shadow-md hover:bg-black hover:text-white"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={handleModalClose}
        title="Order Placed Successfully"
        message="Thank you for your order!"
        buttonText="Close"
      />
    </section>
  )
}

export default CheckoutSection
