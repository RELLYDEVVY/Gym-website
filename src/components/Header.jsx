import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { header } from "./data";
import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setnavMobile] = useState(false);
  const { logo, btnLoginText, btnSignupText } = header;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-[1440px] transititon-all duration-300 flex z-30 left-0 right-0 justify-between mx-auto px-[20px] lg:px-[80px] items-center `}
    >
      <a href="">
        <img className="h-[30px]" src={logo} alt="nothing" />
      </a>
      <Nav />
      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition">
          {btnLoginText}
        </button>
        <button className="btn btn-primary btn-sm">{btnSignupText}</button>
      </div>
      <div
        onClick={() => setnavMobile(!navMobile)}
        className="absolute right-4 lg:hidden"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />
        )}
      </div>
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;