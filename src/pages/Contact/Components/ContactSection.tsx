import FormInputs from "../../../components/FormInputs"

const ContactSection = () => {
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
        <form className="w-full lg:max-w-[40rem]">
          <div className="flex flex-col sm:px-[3.25rem] pt-28 pb-16 gap-y-9 md:pr-0 md:w-full md:pt-0 xl:pr-[3.25rem]">
            <FormInputs
              label="Your name"
              id="yourName"
              placeholder="Abc"
            ></FormInputs>
            <FormInputs
              label="Email address"
              id="email"
              placeholder="Abc@def.com"
            ></FormInputs>
            <FormInputs
              label="Subject"
              id="subject"
              placeholder="This is an optional"
            ></FormInputs>
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi! i'd like to ask about"
              className="bg-white border border-FooterLightGray w-full rounded-xl py-6 px-5 resize-none h-[7.5rem]"
            />
            <button className="bg-Golden px-[5.625rem] py-3.5 rounded-md text-white w-fit mt-4 self-center md:self-start">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
