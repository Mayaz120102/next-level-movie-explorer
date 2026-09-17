import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/90 px-6 py-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-lg font-bold">
          🎬 <span>Movie</span>{" "}
          <span className="text-blue-500">Explorer</span>
        </h1>

        <p className="text-sm text-gray-400">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="#"
            className="text-gray-400 transition-colors hover:text-blue-500"
          >
            GitHub
          </a>

          <a
            href="#"
            className="text-gray-400 transition-colors hover:text-blue-500"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
