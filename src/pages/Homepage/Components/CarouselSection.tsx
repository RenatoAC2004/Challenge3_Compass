import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "../Styles/CarouselStyles.css"

const CarouselSection = () => {
  return (
    <section
      className="h-fit md:h-[41.875rem] flex flex-col bg-CarouselSectionBg font-poppins py-11 overflow-x-hidden 
    md:flex-row"
    >
      <div
        className="h-full flex flex-col justify-center items-center text-center pb-11 px-2 sm:px-10 
      md:px-0 md:pb-0 md:pl-24 md:mr-10 md:items-start md:text-left md:1/2 lg:w-1/3 "
      >
        <h1 className="font-bold text-4xl text-CardTitleColor pb-2">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="font-medium pb-6">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="py-3 px-9 bg-Golden text-white font-semibold w-fit">
          Explore More
        </button>
      </div>
      <div className="md:w-1/2 lg:w-2/3 relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2.3,
            },
          }}
        >
          <SwiperSlide className="flex justify-center pb-14 md:block md:justify-normal md:pb-0">
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/carousel/CarouselBedroom.png"
              alt="Carousel Bedroom Image"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center pb-14 md:block md:justify-normal md:pb-0">
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/carousel/CarouselDiningRoomResized.png"
              alt="Carousel Dining Room Image"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center pb-14 md:block md:justify-normal md:pb-0">
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/carousel/CarouselRoomResized.png"
              alt="Carousel Room Image"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center pb-14 md:block md:justify-normal md:pb-0">
            <img
              src="https://furniro-images-s3.s3.us-east-2.amazonaws.com/images/homepage/carousel/CarouselDiningRoomResized.png"
              alt="Carousel Dining Room Image"
            />
          </SwiperSlide>
          <div className="swiper-button-next transition-all right-2 sm:right-14 hover:bg-Golden hover:text-white shadow-xl"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default CarouselSection
