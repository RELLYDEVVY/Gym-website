import { nav } from "./data";

const NavMobile = ({ navMobile }) => {
  return (
    <div
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } fixed bg-neutral-500 w-full mx-auto top-0 left-0  -z-10 overflow-hidden right-0 transition-all h-0 `}
    >
      <ul className=" flex flex-col justify-center items-center gap-y-8 h-full w-full">
        {nav.map((items, idx) => {
          return (
            <li key={idx} className="text-white text-body-md">
              {items.name}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center gap-x-8 -mt-28">
        <button className="btn btn-lg text-white">Login in</button>
        <button className="btn btn-lg btn-primary">Sign up</button>
      </div>
    </div>
  );
};

export default NavMobile;
