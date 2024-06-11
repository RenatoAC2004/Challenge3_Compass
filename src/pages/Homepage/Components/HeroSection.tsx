const HeroSection = () => {
  return (
    <>
      <section
        className="flex items-center justify-center lg:justify-end h-screen bg-[url('https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/heroImage.png')] bg-cover 
      bg-no-repeat bg-center pt-[6.25rem]"
      >
        <div
          className="flex flex-col justify-between w-fit h-[27.5rem] bg-Beige rounded-xl font-poppins p-4 sm:p-6 mx-4
          md:w-[40.188rem] md:pl-10 md:pr-16 md:pb-9 md:pt-16 md:mx-0
          lg:mr-14"
        >
          <div>
            <p className="font-semibold tracking-[0.188rem]">New Arrival</p>
            <h1 className="font-bold text-Golden text-4xl text-center sm:leading-[4.063rem] py-5 sm:text-[3.25rem] sm:text-left">
              Discover Our <br/> New Collection
            </h1>
            <p className="text-lg font-medium text-justify sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <button className="bg-Golden py-6 px-[4.5rem] font-bold text-white w-fit self-center sm:self-auto">
            BUY NOW
          </button>
        </div>
      </section>
    </>
  )
}

export default HeroSection
