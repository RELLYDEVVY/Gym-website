import PropTypes from "prop-types";
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

/**
 * PlanList component renders a list of plans.
 * It maps over the plans array passed in via props
 * and renders each plan's name in a div.
 * It uses useState to track the index of the currently
 * displayed plan.
 */
const PlanList = ({ plans }) => {
  PlanList.propTypes = {
    plans: PropTypes.array.isRequired,
  };

  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
      {plans.map((plan, currentIndex) => {
        const { name, price, list, delay } = plan;
        return (
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
            onClick={() => setIndex(currentIndex)}
            className="w-full md:max-w-[620px] lg:max-w-[405px] px-4 lg:min-h-[550px]"
            key={currentIndex}
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition duration-100`}
            >
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 items-center">
                <div>
                  <div
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } px-[14px] mb-8 text-sm font-semibold h-[26px] font-primary flex items-center justify-center mx-auto min-w-min`}
                  >
                    {name}
                  </div>
                  <div className="text-[40px] lg:text-[50px] font-primary font-semibold flex flex-col items-center justify-center text-center ">
                    <div className="leading-none">
                      <span className="tracking-[0.1px] font-extrabold text-6xl">
                        {price}
                      </span>
                      <span className="text-[30px] font-extrabold">$</span>
                    </div>
                    <span className="font-medium text-sm">/month</span>
                  </div>
                </div>
                <div>
                  <ul className="flex flex-col mb-8 gap-y-4">
                    {list.map((item, idx) => {
                      return (
                        <li
                          className="flex items-center gap-x-[10px]"
                          key={idx}
                        >
                          <BsCheckCircleFill />
                          <div>{item.name}</div>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "border border-neutral-500"
                    } btn btn-lg rounded-[1px] lg:mx-auto`}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
