const Footer = () => {
  return (
    <footer className="bg-black/90 sm:px-6 py-5 sm:py-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row text-center md:text-left">
        <h1 className="text-lg sm:text-lg font-bold">
          🎬 <span>Movie</span> <span className="text-blue-500">Explorer</span>
        </h1>

        <p className="text-xs sm:text-sm text-gray-400">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-5">
          <a
            href="https://github.com/Mayaz120102/next-level-movie-explorer"
            className="text-xs sm:text-sm text-gray-400 transition-colors hover:text-blue-500"
          >
            GitHub
          </a>

          <a
            href="#"
            className="text-xs sm:text-sm  text-gray-400 transition-colors hover:text-blue-500"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
