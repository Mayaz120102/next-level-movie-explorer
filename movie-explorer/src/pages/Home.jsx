import React from "react";

const Home = () => {
  return (
     <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg')",
      }}
    >
   
   <div className="min-h-screen bg-black/70">

    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-5xl font-extrabold text-white">DISCOVER <span className="text-blue-500">MOVIES</span></h1>
        <p className="max-w-md text-2xl text-gray-300">
          Explore and discover your favorite movies from around the world
        </p>

        <button className="text-lg font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 cursor-pointer py-1 rounded-4xl text-gray-100">
          Explore Now
        </button>
      </div>
    </div>
   </div>
    </div>
  );
};

export default Home;
