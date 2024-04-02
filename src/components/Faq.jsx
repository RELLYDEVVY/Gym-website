import Accordion from "./Accordion";
import { faq } from "./data";

const Faq = () => {
  const { icon, title, accordions } = faq;
  return (
    <section className="section pt-[480px] lg:pt-[280px] ">
      <div className=" lg:pt-6 max-w-[768px] mx-auto lg:bg-faq bg-custom bg-no-repeat bg-center lg:h-[1160px]">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="300"
          className=" lg:max-w-[540px] mx-auto lg:justify-center justify-start -space-x-4 section-title-group px-4 lg:px-0"
        >
          <img className="lg:hidden" src={icon} alt="nothing" />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="300"
          className="flex flex-col gap-y-4 px-4"
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
