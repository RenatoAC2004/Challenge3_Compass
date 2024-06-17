const DescriptionSection = () => {
  return (
    <section className="pt-12 pb-16 h-fit font-poppins px-4 lg:px-12 xl:px-[6.25rem] border-b border-[#D9D9D9]">
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-2xl">Description</h1>
        <p className="text-2xl text-FooterLightGray">Additional Information</p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-7 text-FooterLightGray text-justify py-9 xl:max-w-[65rem]">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-7 justify-center items-center lg:gap-x-7 lg:flex-row">
        <div>
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/singleProductPage/DescriptionSectionFirstSofa.png"
            alt="First Sofa Image"
            className="rounded-xl"
          />
        </div>

        <div>
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/singleProductPage/DescriptionSectionSecondSofa.png"
            alt="Second Sofa Image"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default DescriptionSection
