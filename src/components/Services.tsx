const Services = () => {
  return (
    <>
      <div
        className="hidden h-full bg-LightBeige flex-col font-poppins justify-center gap-y-14 gap-x-7 xl:gap-x-14 xl:px-0 px-4
    md:h-[16.875rem] md:flex-row lg:flex"
      >
        <div className="flex justify-center items-center gap-x-3">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/TrophyIcon.svg"
            alt="High Quality Icon"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">High Quality</h1>
            <p className="font-medium text-xl">crafted from top materials</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/VerifiedIcon.svg"
            alt="Warranty Protection Icon"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">Warranty Protection</h1>
            <p className="font-medium text-xl">Over 2 years</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/ShippingIcon.svg"
            alt="Free Shipping Icon"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">Free Shipping</h1>
            <p className="font-medium text-xl">Order over 150 $</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/SupportIcon.svg"
            alt="24/7 Support Icon"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">24 / 7 Support</h1>
            <p className="font-medium text-xl">Dedicated support</p>
          </div>
        </div>
      </div>

      <div
        className="h-full bg-LightBeige flex font-poppins justify-center items-center p-8
       sm:items-start sm:flex-row lg:hidden"
      >
        <div className="w-fit flex flex-col sm:flex-row gap-x-14 gap-y-14">
          <div className="flex flex-col justify-between items-start gap-y-14 text-center sm:gap-y-5 sm:text-left">
            <div className="flex flex-col justify-center items-center sm:block">
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/TrophyIcon.svg"
                alt="High Quality Icon"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">High Quality</h1>
                <p className="font-medium text-xl">
                  crafted from top materials
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center sm:block">
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/VerifiedIcon.svg"
                alt="Warranty Protection Icon"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">Warranty Protection</h1>
                <p className="font-medium text-xl">Over 2 years</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center gap-y-14 text-center 
        sm:items-start sm:gap-y-5 sm:text-left"
          >
            <div className="flex flex-col justify-center items-center sm:block">
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/ShippingIcon.svg"
                alt="Free Shipping Icon"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">Free Shipping</h1>
                <p className="font-medium text-xl">Order over 150 $</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center sm:block">
              <img
                src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/icons/SupportIcon.svg"
                alt="24/7 Support Icon"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">24 / 7 Support</h1>
                <p className="font-medium text-xl">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
