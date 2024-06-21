import { useDispatch } from "react-redux"
import FormInputs from "../../../components/FormInputs"
import { useState } from "react"
import { saveContactFormData } from "../../../store/contactForm/actions"
import { AppDispatch } from "../../../store"
import {
  FormErrors,
  validateContactForm,
} from "../../../utils/validateContactForm"
import ConfirmationModal from "../../../components/ConfirmationModal"

const ContactSection = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const initialFormData = {
    yourName: "",
    email: "",
    subject: "",
    message: "",
  }

  const [formData, setFormData] = useState(initialFormData)

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    const errors = validateContactForm(formData)
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      dispatch(saveContactFormData(formData))
      setShowConfirmationModal(true)
    }
  }

  const handleModalClose = () => {
    setShowConfirmationModal(false)
    setFormData(initialFormData)
  }

  return (
    <section className="flex flex-col pt-[6.25rem] px-4 sm:px-8 lg:px-24 xl:px-[12.5rem] font-poppins">
      <div className="max-w-[40.625rem] self-center">
        <h1 className="font-semibold text-4xl text-center pb-2">
          Get In Touch With Us
        </h1>
        <p className="text-FooterLightGray text-justify sm:text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row md:pt-28 lg:justify-between 2xl:justify-center">
        <div
          className="flex flex-col justify-center text-center gap-y-10 pt-28 
        md:max-w-64 md:text-left md:pt-0 md:justify-normal"
        >
          <div className="w-full flex flex-col justify-center items-center md:gap-x-4 md:flex-row lg:gap-x-7">
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LocationIcon.svg"
              alt="Location Icon"
              className="w-fit md:self-start"
            />
            <div>
              <p className="font-medium text-2xl pb-4 md:pb-0">Address</p>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center items-center 
          md:justify-normal md:gap-x-4 md:flex-row lg:gap-x-7"
          >
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/PhoneIcon.svg"
              alt="Phone Icon"
              className="w-fit md:self-start"
            />
            <div>
              <p className="font-medium text-2xl pb-4 md:pb-0">Phone</p>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center items-center 
          md:justify-normal md:gap-x-4 md:flex-row lg:gap-x-7"
          >
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/ClockIcon.svg"
              alt="Clock Icon"
              className="w-fit md:self-start"
            />
            <div>
              <p className="font-medium text-2xl pb-4 md:pb-0">Working Time</p>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <form className="w-full lg:max-w-[40rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:px-[3.25rem] pt-28 pb-16 gap-y-9 md:pr-0 md:w-full md:pt-0 xl:pr-[3.25rem]">
            <FormInputs
              label="Your name"
              id="yourName"
              placeholder="Abc"
              value={formData.yourName}
              onChange={handleInputChange}
              error={formErrors.yourName}
            ></FormInputs>
            <FormInputs
              label="Email address"
              id="email"
              placeholder="Abc@def.com"
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
            ></FormInputs>
            <FormInputs
              label="Subject"
              id="subject"
              placeholder="This is an optional"
              value={formData.subject}
              onChange={handleInputChange}
              error={formErrors.subject}
            ></FormInputs>
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <div className="flex flex-col gap-y-5">
              <textarea
                id="message"
                name="message"
                placeholder="Hi! i'd like to ask about"
                value={formData.message}
                onChange={handleInputChange}
                className={`bg-white border ${
                  formErrors.message
                    ? "border-red-500"
                    : "border-FooterLightGray"
                } w-full rounded-xl py-6 px-5 resize-none h-[7.5rem]`}
              />
              {formErrors.message && (
                <span className="text-red-500 text-sm">
                  {formErrors.message}
                </span>
              )}
            </div>
            <button className="bg-Golden px-[5.625rem] py-3.5 rounded-md text-white w-fit mt-4 self-center md:self-start">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={handleModalClose}
        title="Form Submission Successful"
        message="Thank you for your submission!"
        buttonText="Close"
      />
    </section>
  )
}

export default ContactSection
