import { footer } from "./data";

const Footer = () => {
  const { copyrightText, logo } = footer;
  return (
    <footer className="px-[20px] bg-neutral-500 h-[125px] md:h-[195px] ">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="container mx-auto flex justify-between h-full items-center md:items-end md:pb-[50px]"
      >
        <a href="#">
          <img src={logo} alt="nothing" />
        </a>
        <p className="text-sm text-neutral-300">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
