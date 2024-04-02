import { join } from "./data";

const Join = () => {
  const { btnText, image, subtitle } = join;
  return (
    <section className="min-h-[537px] bg-neutral-500 mt-32 md:mt-0">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
            className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full"
          >
            <img src={image} alt="nothing" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="300"
            className="max-w-[350px] lg:max-w-[490px] ml-4"
          >
            <h2 className=" h1 text-white mb-4 lg:mb-6 md:text-[60px] md:leading-[62px] ">
              Want to Join <span className="text-primary-200">&</span> have fun?
            </h2>
            <p className="text-white text-body-sm mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[470px] ">
              {subtitle}
            </p>
            <button className="btn btn-secondary btn-lg">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
