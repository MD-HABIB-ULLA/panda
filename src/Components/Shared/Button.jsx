import { Link } from "react-router-dom";

const Button = ({ btnText, path }) => {
  return (
    <Link to={path}>
      <button class="px-8 z-30 py-3 bg-transparent border-2 border-[#FF2279] rounded-md text-black hover:text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#FF2279] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  hover:[text-shadow:2px_2px_2px_#fda4af] ">{btnText}</button>
    </Link>
  );
};

export default Button;
