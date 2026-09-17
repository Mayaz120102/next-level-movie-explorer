import React from 'react';

const Navbar = () => {
    return (
        <div className='absolute w-full flex items-center justify-between px-6 py-6'>
            <h1 className='text-xl font-bold text-white'>🎬<span className='text-white'>Movie</span> <span className='text-blue-500'>Explorer</span></h1>
            <button className="text-lg font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 cursor-pointer py-1 rounded-4xl text-gray-100">Movies</button>
        </div>
    );
};

export default Navbar;