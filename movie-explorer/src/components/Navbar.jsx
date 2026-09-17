import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-black/90 relative z-10">
      <Link to="/">
        <h1 className="text-base sm:text-xl font-bold text-white">
          🎬<span className="text-white">Movie</span>{" "}
          <span className="text-blue-500">Explorer</span>
        </h1>
      </Link>

      <Link
        to="/movies"
        className="text-sm sm:text-lg font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-3 sm:px-5 cursor-pointer py-1 rounded-4xl text-gray-100"
      >
        Movies
      </Link>
    </div>
  );
};

export default Navbar;
