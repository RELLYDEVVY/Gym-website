import WorkoutSlider from "./WorkoutSlider";
import { workouts } from "./data";

const Workouts = () => {
  const { icon, title } = workouts;
  return (
    <section className="section">
      <div>
        <div data-aos='fade-up' data-aos-delay='200' className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0 ">
          <img src={icon} alt="nothing" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div>
          <WorkoutSlider />
        </div>
      </div>
    </section>
  );
};

export default Workouts;
