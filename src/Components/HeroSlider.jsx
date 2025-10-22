import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import cat1 from "../assets/close-up-cute-cat-green-scarf.jpg";
import cat2 from "../assets/cute-cat-sweater-lying-snow-playground.jpg";
import dogIMG from "../assets/dog2.jpg";

function HeroSlider() {
  return (
    <div className="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        speed={1800}
        effect="fade"
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={cat1}
              alt="Cute cat"
              className="w-full h-full object-cover filter brightness-60 blur-[1px]"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary drop-shadow-lg">
                Keep Your Cat Cozy This Winter
              </h2>
              <p className="mt-3 text-sm md:text-base lg:text-lg font-second drop-shadow-md">
                Discover warm outfits and gentle care tips for your furry
                friend.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={cat2}
              alt="Cozy cat"
              className="w-full h-full object-cover filter brightness-60 blur-[1px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary drop-shadow-lg">
                Winter Playtime, Safely
              </h2>
              <p className="mt-3 text-sm md:text-base lg:text-lg font-second drop-shadow-md">
                Fun and safety for your pets in the snow.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={dogIMG}
              alt="Winter pet"
              className="w-full h-full object-cover filter brightness-60 blur-[1px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary drop-shadow-lg">
                Warm Hearts & Paws
              </h2>
              <p className="mt-3 text-sm md:text-base lg:text-lg font-second drop-shadow-md">
                Keep your pup warm and happy during chilly days.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
