import React from "react"
import { Link } from "react-router-dom"

type PagesTitlesProps = {
  currentPage: string
}

const PagesTitles: React.FC<PagesTitlesProps> = ({ currentPage }) => {
  return (
    <div className="relative flex items-center justify-center h-[19.75rem] w-full md:h-full pt-[6.25rem] font-poppins">
      <img
        src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/TitlesBackground.png"
        alt="Title Background"
        className="w-full h-full object-cover object-left"
      />
      <div className="absolute flex flex-col items-center">
        <h1 className="font-medium text-5xl">{currentPage}</h1>
        <p className="flex justify-center items-center gap-x-1.5">
          <Link to="/" className="font-semibold hover:underline">Home</Link> <span className="font-semibold text-xl">{">"}</span> {currentPage}
        </p>
      </div>
    </div>
  )
}

export default PagesTitles
