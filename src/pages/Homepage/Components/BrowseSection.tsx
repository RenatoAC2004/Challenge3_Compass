import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination } from "swiper/modules"

const BrowseSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center font-poppins px-4 py-14 sm:px-12 lg:px-16 xl:px-32 xl:h-fit">
      <div className="text-center pb-16">
        <h1 className="text-3xl font-bold text-TitlesColor">
          Browse The Range
        </h1>
        <p className="text-TextColor text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="hidden md:flex gap-x-5 justify-center">
        <div className="text-center">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/browseSection/image-dining+room.png"
            alt="Dining Room"
          />
          <p className="pt-7 font-semibold text-TitlesColor text-2xl">Dining</p>
        </div>
        <div className="text-center">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/browseSection/Image-living+room.png"
            alt="Living Room"
          />
          <p className="pt-7 font-semibold text-TitlesColor text-2xl">Living</p>
        </div>
        <div className="text-center">
          <img
            src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/browseSection/image-bedroom.png"
            alt="Bedroom"
          />
          <p className="pt-7 font-semibold text-TitlesColor text-2xl">
            Bedroom
          </p>
        </div>
      </div>

      <Swiper
        className="md:hidden w-full h-fit"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        <SwiperSlide className="flex justify-center text-center ">
          <div>
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/browseSection/image-dining+room.png"
              alt="Dining Room"
            />
            <p className="pt-7 pb-14 font-semibold text-TitlesColor text-2xl">
              Dining
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center text-center">
          <div>
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/browseSection/Image-living+room.png"
              alt="Living Room"
            />
            <p className="pt-7 font-semibold text-TitlesColor text-2xl">
              Living
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center text-center">
          <div>
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/browseSection/image-bedroom.png"
              alt="Bedroom"
            />
            <p className="pt-7 font-semibold text-TitlesColor text-2xl">
              Bedroom
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default BrowseSection
