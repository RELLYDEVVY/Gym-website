import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  Accordion.propTypes = {
    accordion: PropTypes.array.isRequired,
  };
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;
  return (
    <div className="cursor-pointer">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border rounded-sm"
      >
        <div className="min-h-[60px] flex justify-between items-center px-[30px]">
          <h6 className="h6">{question}</h6>
          <div>{isOpen ? <FaChevronCircleDown /> : <FaChevronCircleUp />}</div>
        </div>
        <div
          className={`${
            isOpen ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0"
          } px-[30px] flex justify-center transition-all max-h-0 overflow-hidden`}
        >
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
