import { nav } from "./data";
const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex space-x-8 text-white ">
        {nav.map((item, idx) => {
          return (
            <li key={idx} className="hover:text-primary-200 transition">
              <a href={item.href}>{item.name}</a>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
