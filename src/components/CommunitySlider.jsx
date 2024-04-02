import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

/* eslint-disable-next-line react/prop-types */
const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={"auto"}
      grabCursor={true}
      modules={[]}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {testimonials.map((testimonial, idx) => {
        const { image, message, name } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div>
              <img src={image} alt="nothing" />
            </div>
            <div className="absolute bottom-[30px] px-[20px] text-white text-center">
              <div className="italic mb-8 text-lg font-light">{message}</div>
              <div className="flex items-center justify-center gap-x-[3px]">
                <span className="text-primary-200 text-[30px] font-bold">~</span>
                <div className="text-[20px] font-bold">{name}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
