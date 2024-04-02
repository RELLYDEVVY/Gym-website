import { pricing } from "./data";
import PlanList from "./PlanList";
const Pricing = () => {
  const { icon, title, plans } = pricing;
  return (
    <section className=" section">
      <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='200' className="section-title-group">
        <img src={icon} alt="nothing" />
        <h2 className="h2">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      <div>
        <PlanList plans={plans} />
      </div>
    </section>
  );
};

export default Pricing;
