import { about } from "./data";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  const { icon, link, subtitle1, subtitle2, title } = about;
  return (
    <section className=" py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="section-title-group justify-start"
        >
          <img src={icon} alt="nothing" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:text-body-md mb-12"
        >
          {subtitle1}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="md:text-body-md mb-8"
        >
          {subtitle2}
        </p>
        <div data-aos="fade-up" data-aos-delay="400" className="w-32">
          <a
            className="link flex gap-x-4 hover:gap-x-6 transition-all items-center"
            href="#"
          >
            {link} <IoIosArrowDroprightCircle />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
