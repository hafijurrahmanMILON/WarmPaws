import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider5.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.jpg";

const HeroSlider = () => {
  return (
    <div className="mx-auto bg-gray-100 relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-28 py-20 px-6 md:px-12 lg:px-5">
            <div className="space-y-3">
              <h1 className="font-primary text-primary text-4xl md:text-5xl font-bold">
                Keep Your Cat Cozy <br /> This Winter
              </h1>
              <p>
                Discover warm outfits and gentle care tips for your furry
                friend.
              </p>
            </div>
            <div>
              <img
                className="rounded-2xl object-cover"
                src={img1}
                alt="Winter Cat Care"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-28 py-20 px-6 md:px-12 lg:px-5">
            <div className="space-y-3">
              <h1 className="font-primary text-primary text-4xl md:text-5xl font-bold">
                Warm Hearts, Healthy Pets <br /> All Winter Long
              </h1>
              <p>
                From cozy coats to expert care, we help your furry friend thrive
                through the cold season.
              </p>
            </div>
            <div>
              <img
                className="rounded-2xl object-cover"
                src={img4}
                alt="Winter Cat Care"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-28 py-20 px-6 md:px-12 lg:px-5">
            <div className="space-y-3">
              <h1 className="font-primary text-primary text-4xl md:text-5xl font-bold">
                Winter Wellness for Pets <br /> Starts at Home
              </h1>
              <p>
                Learn how to create a warm, safe space and daily routine for
                your pet’s winter comfort.
              </p>
            </div>
            <div>
              <img
                className="rounded-2xl object-cover"
                src={img3}
                alt="Vet Care"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-28 py-20 px-6 md:px-12 lg:px-5">
            <div className="space-y-3">
              <h1 className="font-primary text-primary text-4xl md:text-5xl font-bold">
                Cozy Companions <br /> Every Season
              </h1>
              <p>
                Because pets deserve the best warmth, comfort, and love all year
                round.
              </p>
            </div>
            <div>
              <img
                className="rounded-2xl object-cover"
                src={img2}
                alt="Pet Care"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom pagination styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #fef3c7 !important; /* amber-100 */
          opacity: 0.8 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 5px !important;
          transition: all 0.4s ease !important;
          border: 1px solid #fbbf24 !important; /* amber-400 border */
          box-shadow: 0 2px 4px rgba(251, 191, 36, 0.2) !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffffff !important; /* white */
          opacity: 1 !important;
          transform: scale(1.4) !important;
          border: 2px solid #d97706 !important; /* amber-600 border */
          box-shadow: 0 4px 8px rgba(217, 119, 6, 0.3) !important;
        }
        .swiper-pagination {
          position: absolute !important;
          bottom: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
