import CommunitySlider from "./CommunitySlider";
import { community } from "./data";

const Community = () => {
  const { icon, title, testimonials } = community;
  return (
    <section className=" section relative">
      <div className="container mx-auto">
        <div className="flex">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            className="section-title-group max-w-[240px] mx-auto px-4 lg:px-0 lg:ml-0"
          >
            <img src={icon} alt="nothing" />
            <h2 className="h1 section-title">
              {title} <span className="text-primary-200">.</span>
            </h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="300"
            className="absolute -right-[375px] w-[1140px] lg:-right-[280px] top-48 lg:top-0 "
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
