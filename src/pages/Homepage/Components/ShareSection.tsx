const ShareSection = () => {
  return (
    <section className="flex flex-col justify-center h-fit py-14 font-poppins text-center px-4 sm:px-8 md:px-0">
      <p className="font-semibold text-xl pb-2">Share your setup with</p>
      <h1 className="font-bold text-3xl sm:text-4xl">#FuniroFurniture</h1>
      <img
        src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/shareSection/ShareSectionImage.png"
        alt="Share Section Image"
        className="hidden md:block"
      />
      <div className="md:hidden flex flex-col gap-y-8 pt-8">
        <img
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/shareSection/ShareSectionOffice.png"
          alt=""
          className="rounded-3xl"
        />
        <img
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/shareSection/ShareSectionTable.png"
          alt=""
          className="rounded-3xl"
        />
        <img
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/shareSection/ShareSectionDiningRoom.png"
          alt=""
          className="rounded-3xl"
        />
        <img
          src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/shareSection/ShareSectionBedroom.png"
          alt=""
          className="rounded-3xl"
        />
      </div>
    </section>
  )
}

export default ShareSection
