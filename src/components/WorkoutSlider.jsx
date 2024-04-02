import { workouts } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";

const WorkoutSlider = () => {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {programs.map((program, idx) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative "
            key={idx}
          >
            <img className="w-full h-full object-cover" src={image} alt="" />
            <div className="absolute left-[20px] bottom-[20px] h-[26px] bg-white px-[14px] rounded-[3px] flex items-center ">
              <div className="font-primary font-semibold text-sm text-neutral-500">
                {" "}
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
