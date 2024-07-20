import { useContext } from "react";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center p-4">
      <a href="/">
        <img src={Logo} 
        className="text-yellow-300" width={60} height={60} />
      </a>
      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-full items-center px-2">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent w-full outline-none pl-2 items-center rounded-full"
        />
      </div>
      <div>
        {theme == "dark" ? (
          <HiSun
            className="text-[35px] cursor-pointer
        bg-gray-200 text-black p-1 rounded-full"
            onClick={() => setTheme("light")}
          />
        ) : (
          <HiMoon
            className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
