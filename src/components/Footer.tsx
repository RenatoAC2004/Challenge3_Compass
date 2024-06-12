import React, { useState } from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }

  return (
    <footer className="h-[31.563rem] border-t border-FooterLightGray px-12 lg:px-[6.25rem] py-10 font-poppins">
      <div className="h-fit flex flex-col md:flex-row border-b border-FooterLightGray pb-12 justify-between gap-x-8 xl:gap-x-0 xl:justify-normal">
        <div className="flex flex-col gap-y-12 border-b pb-6 md:pb-0 md:border-b-0">
          <h1 className="font-bold text-2xl">Funiro.</h1>
          <p className="text-FooterLightGray xl:w-[17.813rem]">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
          <div className="flex gap-x-4">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="flex justify-center items-center rounded-full shadow-FooterLightGray shadow-lg w-8 h-8 
              transition-all hover:bg-[#1877F2]"
            >
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/FacebookIcon.svg"
                alt="Facebook Icon"
              />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="flex justify-center items-center rounded-full shadow-FooterLightGray shadow-lg w-8 h-8
              transition-all hover:bg-[#C13584]"
            >
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/InstagramIcon.svg"
                alt="Instagram Icon"
              />
            </Link>
            <Link
              to="https://x.com/"
              target="_blank"
              className="flex justify-center items-center rounded-full shadow-FooterLightGray shadow-lg w-8 h-8
              transition-all hover:bg-[#1DA1F2]"
            >
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/TwitterIcon.svg"
                alt="Twitter Icon"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              className="flex justify-center items-center rounded-full shadow-FooterLightGray shadow-lg w-8 h-8
              transition-all hover:bg-[#0A66C2]"
            >
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/LinkedinIcon.svg"
                alt="Linkedin Icon"
              />
            </Link>
          </div>
        </div>

        <div className="flex gap-x-16 border-b justify-center md:justify-normal md:border-b-0">
          <ul
            className="flex flex-col font-medium py-6 gap-y-4 
         md:gap-y-11 md:py-0 xl:pl-32 xl:pr-36"
          >
            <h2 className="text-FooterLightGray">Links</h2>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Shop</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>

          <ul className="flex flex-col font-medium gap-y-4 py-6 md:py-0 md:gap-y-11 xl:pr-20">
            <li className="text-FooterLightGray">Help</li>
            <li>
              <Link to={"/"}>Payment Options</Link>
            </li>
            <li>
              <Link to={"/"}>Returns</Link>
            </li>
            <li>
              <Link to={"/"}>Privacy Policies</Link>
            </li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center pt-6 gap-4 md:gap-0 md:justify-normal md:items-start md:pt-0"
        >
          <p className="text-FooterLightGray font-medium md:pb-11">
            Newsletter
          </p>
          <div className="flex gap-x-3 gap-y-4 flex-col flex-wrap w-fit lg:gap-y-0 lg:flex-row lg:flex-nowrap">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-black text-sm xl:w-52"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="border border-black p-1 w-full rounded-lg transition-colors 
              hover:bg-black hover:text-white md:w-fit lg:rounded-none lg:border-0 lg:border-b lg:p-0 lg:hover:text-black lg:hover:bg-transparent"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
      <p className="pt-9 pb-9 text-center md:pb-0 md:text-left">
        2023 furino. All rights reverved
      </p>
    </footer>
  )
}

export default Footer
